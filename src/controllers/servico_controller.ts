import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import moment from 'moment';
import Servico from '../models/servico_model';

const NAMESPACE = 'Serviço Controller';

const index = async (req: Request, res: Response, next: NextFunction) => {
  Servico.find()
    .exec()
    .then((servicos) => {
      return res.status(200).json({
        servicos: servicos,
      });
    })
    .catch((error) => {
      return res.status(500).json({
        message: error.message,
        error
      });
    });
};

const indexMotorista = async (req: Request, res: Response, next: NextFunction) => {
  const { jwt } = res.locals;

  Servico.find({ 'motorista.pessoa_id': jwt.usuario_id })
    .exec()
    .then((servicos) => {
      return res.status(200).json({
        servicos: servicos,
      });
    })
    .catch((error) => {
      return res.status(500).json({
        message: error.message,
        error
      });
    });
};

const indexPassageiro = async (req: Request, res: Response, next: NextFunction) => {
  const { jwt } = res.locals;

  Servico.find({ "passageiros.pessoa_id": jwt.usuario_id })
    .exec()
    .then((servicos) => {
      return res.status(200).json({
        servicos: servicos,
      });
    })
    .catch((error) => {
      return res.status(500).json({
        message: error.message,
        error
      });
    });
};

const show = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  const servico = await Servico.findOne({ _id: id })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        error
      });
    });

  if (!servico) {
    return res.status(404).json({
      message: 'Serviço nao encontrado'
    });
  } else {
    return res.status(200).json({
      servico
    });
  }
};

const register = async (req: Request, res: Response, next: NextFunction) => {

  let {
    titulo,
    descricao,
    vagas_disponiveis,
    veiculos,
    trajeto,
    contrato,
  } = req.body;

  const { jwt } = res.locals;

  let _servico = new Servico({
    _id: new mongoose.Types.ObjectId(),
    titulo,
    descricao,
    vagas_disponiveis,
    veiculos,
    trajeto,
    contrato,
    motorista: {
      pessoa_id: jwt.usuario_id,
      nome: jwt.usuario_nome,
    },
    passageiros: [],
  });

  return _servico
    .save()
    .then((servico) => {
      return res.status(201).json({
        message: 'Criado com Sucesso',
      });
    })
    .catch((error) => {
      return res.status(500).json({
        message: error.message,
        error
      });
    });
};

const update = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  await Servico.findOneAndUpdate({ _id: id },
    {
      $set: req.body
    },
    {
      runValidators: true,
    })
    .then(() => res.status(202).send({ message: 'Atualizado com sucesso' }))
    .catch((error) => {
      return res.status(500).json({
        error
      });
    });
};

const destroy = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  await Servico.findOneAndRemove({ _id: id })
    .then(() => res.status(202).send({ message: 'Deletado com sucesso' }))
    .catch((error) => {
      return res.status(500).json({
        message: error.message,
        error
      });
    });
};

const search = async (req: Request, res: Response, next: NextFunction) => {
  const { input } = req.body;

  console.log(input)

  await Servico.find({
    //fix
    $or: [
      { titulo: { $regex: input, $options: 'i' } },
      { descricao: { $regex: input, $options: 'i' } },
    ],
  }).then((servicos) => {
    return res.status(200).json({
      servicos: servicos,
    });
  })
    .catch((error) => {
      return res.status(500).json({
        message: error.message,
        error
      });
    });
}

const uploadImages = async (req: Request, res: Response, next: NextFunction) => {
  console.log(req.files)

  if (!req.files) { // Se não contém imagens
    return res.status(500).json({
      message: 'No images Found',
    });
  } else {
    const requestImages = req.files as Express.Multer.File[];

    const filenames = requestImages.map(function (file) {
      return file.filename; // or file.originalname
    });


    res.status(204).send(); // TODO: mudar resposta
  }
}

const uploadPdf = async (req: Request, res: Response, next: NextFunction) => {
  console.log(req.file)

  res.status(204).send(); // TODO: mudar resposta
}

const contratar = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const { jwt } = res.locals;
  const { data_inicio_contrato, data_fim_contrato } = req.body;

  let _servico = await Servico.findById(id);

  if (!_servico) {
    return res.status(418).json({
      message: 'Serviço nao encontrado'
    });
  }

  if (_servico.vagas_disponiveis === _servico.passageiros.length) {
    return res.status(418).json({
      message: 'Serviço Não tem Vagas abertas',
      mensalidade,
    });
  }

  let date = Date.now()
  var mensalidade = [];
  for (let i = 0; i < 6; i++) {
    mensalidade.push(
      {
        data_vencimento: moment(date).add(i + 1, 'M').toISOString(),
        valor: parseInt(_servico.trajeto.valor_cobrado.replace('R$ ', '')),
        is_pago: false,
      }
    )
  }

  await _servico.updateOne(
    {
      $push: {
        'passageiros': {
          pessoa_id: jwt.usuario_id,
          pessoa_nome: jwt.usuario_nome,
          data_inicio_contrato,
          data_fim_contrato,
          mensalidade,
        }
      }
    },
    { upsert: true },
  )
    .then(() => res.status(202).send({ message: 'Contratado com sucesso' }))
    .catch(error => {
      return res.status(500).json({
        message: error.message,
        error
      });
    });
};

export default { index, indexMotorista, indexPassageiro, show, register, update, destroy, search, uploadImages, uploadPdf, contratar };
