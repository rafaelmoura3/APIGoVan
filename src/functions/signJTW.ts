import jwt from 'jsonwebtoken';
import mongoConfig from '../configs/mongoose';
import logging from '../configs/logging';
import IUser from '../interfaces/usuario_interface';

const NAMESPACE = 'Auth';

const signJWT = (user: IUser, callback: (error: Error | null, token: string | null) => void): void => {

    logging.info(NAMESPACE, `Tentativa de Login: ID=${user._id} NAME=${user.email}`);

    try {
        jwt.sign(
            {
                usuario_id: user._id,
                usuario_nome: user.pessoa.nome,
                usuario_is_motorista: user.is_motorista,
            },
            mongoConfig.server.token.secret,
            {
                issuer: mongoConfig.server.token.issuer,
                algorithm: 'HS256',
            },
            (error, token) => {
                if (error) {
                    callback(error, null);
                    logging.error(NAMESPACE, `Falha de Login, ERRO: ID=${user._id} NAME=${user.email}`);
                } else if (token) {
                    callback(null, token);
                    logging.info(NAMESPACE, `Login Autorizado: ID=${user._id} NAME=${user.email}`);
                }
            }
        );
    } catch (error) {
        logging.error(NAMESPACE, error.message, error);
        callback(error, null);
    }
};

export default signJWT;
