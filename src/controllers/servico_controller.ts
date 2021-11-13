import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import Servico from '../models/servico_model';

const NAMESPACE = 'Serviço Controller';

const index = async (req: Request, res: Response, next: NextFunction) => {
  Servico.find()
    .exec()
    .then((servicos) => {
      return res.status(200).json({
        servicos: servicos,
        count: servicos.length
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
    passageiros,
  } = req.body;

  let _servico = new Servico({
    _id: new mongoose.Types.ObjectId(),
    titulo,
    descricao,
    vagas_disponiveis,
    veiculos,
    trajeto,
    contrato,
    passageiros,
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
      { area_inspecao_codigo: { $regex: input, $options: 'i' } },
      { area_inspecao_sigla: { $regex: input, $options: 'i' } },
      { area_inspecao_setor: { $regex: input, $options: 'i' } },
      { area_inspecao_local: { $regex: input, $options: 'i' } },
      { "unidades_inspecao.unidade_inspecao_codigo": input },
      { "unidades_inspecao.unidade_inspecao_sigla": input },
      { "unidades_inspecao.unidade_inspecao_unidade": input },
      { "unidades_inspecao.unidade_inspecao_local": input },
      // { unidades_inspecao: input },
    ],
  }).then((servicos) => {
    return res.status(200).json({
      servicos: servicos,
      count: servicos.length
    });
  })
    .catch((error) => {
      return res.status(500).json({
        message: error.message,
        error
      });
    });
}

export default { index, show, register, update, destroy, search };
