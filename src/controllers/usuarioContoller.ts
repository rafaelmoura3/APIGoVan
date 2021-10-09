import { NextFunction, Request, Response } from 'express';
import { getRepository } from 'typeorm';

import User from '../models/usuario';

class usuarioController{
    index(req: Request, res: Response, nex: NextFunction){
        return res.send({ userid: req.userid});
    }

   async store(req: Request, res: Response){
        const repository = getRepository(User);
        const { email, senhaHash, contato, urlFoto } = req.body;

        const userExists = await repository.findOne({ where: {email} });

        if (userExists) {
            return res.sendStatus(409);
        }

        const user = repository.create({ email, senhaHash, contato, urlFoto });
        await repository.save(user);

        return res.json(user);
    }
}


export default new usuarioController();