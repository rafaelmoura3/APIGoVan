import jwt from 'jsonwebtoken';
import mongoConfig from '../configs/mongoose';
import logging from '../configs/logging';
import IAuth from '../interfaces/auth_interface';

const NAMESPACE = 'Auth';

const signJWT = (user: IAuth, callback: (error: Error | null, token: string | null) => void): void => {

    logging.info(NAMESPACE, `Tentativa de Login: ID=${user._id} NAME=${user.username}`);

    try {
        jwt.sign(
            {
                id: user._id,
                username: user.username,
            },
            mongoConfig.server.token.secret,
            {
                issuer: mongoConfig.server.token.issuer,
                algorithm: 'HS256',
            },
            (error, token) => {
                if (error) {
                    callback(error, null);
                    logging.error(NAMESPACE, `Falha de Login, ERRO: ID=${user._id} NAME=${user.username}`);
                } else if (token) {
                    callback(null, token);
                    logging.info(NAMESPACE, `Login Autorizado: ID=${user._id} NAME=${user.username}`);
                }
            }
        );
    } catch (error) {
        logging.error(NAMESPACE, error.message, error);
        callback(error, null);
    }
};

export default signJWT;
