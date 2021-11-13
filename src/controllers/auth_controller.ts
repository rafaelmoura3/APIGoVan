import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import bcryptjs from 'bcryptjs';
import logging from '../configs/logging';
import Usuario from '../models/usuario_model';
import signJWT from '../functions/signJTW';

const NAMESPACE = 'Auth Controller';

const login = async (req: Request, res: Response, next: NextFunction) => {
    let { email, senha } = req.body;

    let userExists = await Usuario.exists({ email })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });

    if (!userExists) {
        return res.status(409).json({
            message: 'E-mail ou senha errado.'
        });
    }

    const user = await Usuario.findOne({ email }).select('+senha');

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


export default { validateToken, login };
