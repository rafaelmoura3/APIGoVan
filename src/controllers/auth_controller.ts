import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import bcryptjs from 'bcryptjs';
import logging from '../configs/logging';
import Usuario from '../models/usuario_model';
import signJWT from '../functions/signJTW';

const NAMESPACE = 'Auth Model';

const register = async (req: Request, res: Response, next: NextFunction) => {
    //FIX: adicionar outros dados que estão faltando do usuário
    let {
        email,
        senha,
    } = req.body;

    var conflict = false;

    await Usuario.find({ email })
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

const login = async (req: Request, res: Response, next: NextFunction) => {
    let { email, senha } = req.body;

    const user = await Usuario.findOne({ email }).select('+senha');

    if (!user) {
        return res.status(401).json({
            message: 'Nao Autorizado'
        });
    }

    if (!await bcryptjs.compare(senha, user.senha)) {
        return res.status(401).json({
            message: 'Nao Autorizado'
        });
    }

    user.senha = undefined;

    await signJWT(user, (_error, token) => {
        if (_error) {
            return res.status(500).json({
                message: _error.message,
                error: _error
            });
        } else if (token) {
            return res.status(200).json({
                message: 'Autorizado com sucesso',
                id: user._id,
                username: user.email,
                token: token,
            });
        }
    });
};

const validateToken = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, 'Token validated, user authorized.');

    return res.status(200).json({
        message: 'Token validado'
    });
};


export default { register, validateToken, login };
