import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import bcryptjs from 'bcryptjs';
import logging from '../configs/logging';
import Servico from '../models/servico_model';
import signJWT from '../functions/signJTW';

const NAMESPACE = 'Auth Model';

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
    motoristas_id,
    veiculos,
    trajeto,
    contrato,
    passageiros,
  } = req.body;

  let _servico = new Servico({
    _id: new mongoose.Types.ObjectId(),
    motoristas_id,
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

export default { index, show, register, update, destroy };
