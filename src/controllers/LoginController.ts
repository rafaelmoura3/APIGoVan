import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/usuario';


class loginController{
   async store(req: Request, res: Response){
        const repository = getRepository(User);
        const { email, senhaHash} = req.body;

        const user = await repository.findOne({ where: {email} });

        if(!user){
            return res.sendStatus(401);
        }

        const isValidPassord = await bcrypt.compare(senhaHash, user.senhaHash);
        
        if(!isValidPassord){
            return res.sendStatus(401);
        }

        const token = jwt.sign({ id: user.uuid }, 'secret', {expiresIn: '1d'});

        delete user.senhaHash;

        return res.json({
            user,
            token,
        });
    }   
}


export default new loginController();