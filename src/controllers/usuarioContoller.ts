import { NextFunction, Request, Response } from 'express';
import { getRepository } from 'typeorm';

import User from '../models/usuario';

class usuarioController {
    index(req: Request, res: Response, nex: NextFunction) {
        return res.status(200).json({ userid: req.userid });
    }

    async store(req: Request, res: Response) {
        const repository = getRepository(User);
        const { email, senhaHash, contato, urlFoto, isMotorista } = req.body;

        const userExists = await repository.findOne({ where: { email } });

        if (userExists) {
            return res.status(409).json({
                message: 'Usuário já existe.'
            });
        }

        const user = repository.create({ email, senhaHash, contato, urlFoto, isMotorista });
        await repository.save(user);

        return res.status(201).json(user);
    }
}


export default new usuarioController();