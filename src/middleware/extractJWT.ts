import jwt from 'jsonwebtoken';
import mongoConfig from '../configs/mongoose';
import logging from '../configs/logging';
import { Request, Response, NextFunction } from 'express';

const NAMESPACE = 'Autentificacao Token';

const autenticarToken = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, 'Validando token');

    let token = req.headers.authorization?.split(' ')[1];

    if (token) {
        jwt.verify(token, mongoConfig.server.token.secret, (error, decoded) => {
            if (error) {
                logging.error(NAMESPACE, 'Erro na validacao, nao autorizado.');
                return res.status(401).json({
                    error
                });
            } else {
                res.locals.jwt = decoded;
                logging.info(NAMESPACE, `Sucesso de validacao de token ID=${decoded.id} NAME=${decoded.nome}`);
                next();
            }
        });
    } else {
        return res.status(401).json({
            message: 'Nao Autorizado'
        });
    }
};

export default autenticarToken;
