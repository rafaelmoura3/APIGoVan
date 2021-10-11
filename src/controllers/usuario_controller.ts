import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import bcryptjs from 'bcryptjs';
import Usuario from '../models/usuario_model';

const NAMESPACE = 'Usuarios Model';

const register = async (req: Request, res: Response, next: NextFunction) => {
  let {
    email,
    senha,
    url_foto,
    is_motorista,
    pessoa,
  } = req.body;

  let userExists = await Usuario.find({ email })
    .exec()
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });

  if (userExists) {
    return res.status(409).json({
      message: 'Usuário já existe.'
    });
  }

  bcryptjs.hash(senha, 10, (hashError, hash) => {
    if (hashError) {
      return res.status(401).json({
        message: hashError.message,
        error: hashError
      });
    }

    const _usuario = new Usuario({
      _id: new mongoose.Types.ObjectId(),
      email,
      senha: hash,
      url_foto,
      is_motorista,
      pessoa,
    });

    return _usuario
      .save()
      .then((usuario) => {
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
  });
}

const registerOLD = async (req: Request, res: Response, next: NextFunction) => {
  let {
    email,
    senha,
    url_foto,
    is_motorista,
    pessoa,
  } = req.body;

  var conflict = false;

  const userExists = await Usuario.find({ email })
    .exec()
    .then((users) => {
      if (users.length >= 1) {
        conflict = true
        return res.status(409).json({
          message: 'Conflicto com usuario existente'
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
  if (conflict === false) {

    bcryptjs.hash(senha, 10, (hashError, hash) => {
      if (hashError) {
        return res.status(401).json({
          message: hashError.message,
          error: hashError
        });
      }

      const _usuario = new Usuario({
        _id: new mongoose.Types.ObjectId(),
        email,
        senha: hash,
        url_foto,
        is_motorista,
        pessoa,
      });

      return _usuario
        .save()
        .then((usuario) => {
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
    });
  }
};

const index = async (req: Request, res: Response, next: NextFunction) => {
  Usuario.find()
    .select('-senha')
    .exec()
    .then((usuarios) => {
      return res.status(200).json({
        usuarios: usuarios,
        count: usuarios.length
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

  const user = await Usuario.findOne({ _id: id })
    .select('-senha')
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        error
      });
    });

  if (!user) {
    return res.status(404).json({
      message: 'Usuario nao encontrado'
    });
  } else {
    return res.status(200).json({
      user
    });
  }
};

const update = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  await Usuario.findOneAndUpdate({ _id: id },
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

  await Usuario.findOneAndRemove({ _id: id })
    .then(() => res.status(202).send({ message: 'Deletado com sucesso' }))
    .catch((error) => {
      return res.status(500).json({
        message: error.message,
        error
      });
    });
};

const changePassword = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  let {
    usuario_senha,
    nova_senha,
  } = req.body;

  const user = await Usuario.findById(id).select('+usuario_senha');

  if (!user) {
    return res.status(404).json({
      message: 'Nao Encontrado'
    });
  }

  if (!await bcryptjs.compare(usuario_senha, user.senha)) {
    return res.status(401).json({
      message: 'Nao Autorizado'
    });
  }

  bcryptjs.hash(nova_senha, 10, async (hashError, hash) => {
    if (hashError) {
      return res.status(401).json({
        message: hashError.message,
        error: hashError
      });
    }

    await Usuario.findOneAndUpdate({ _id: id },
      {
        $set: { usuario_senha: hash }
      },
      {
        runValidators: true,
      })
      .then(() => res.status(202).send({ message: 'Senha alterada com sucesso' }))
      .catch((error) => {
        return res.status(500).json({
          error
        });
      });
  });
};

export default { index, show, register, update, destroy, changePassword };
