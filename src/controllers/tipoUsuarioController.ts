import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import tipoUsuario from '../models/tipoUsuario';


export default{
    async create(request: Request, response:Response){
    const {
    descricao    
    } = request.body;
 
    const tipoUsuarioRepository = getRepository(tipoUsuario);

    const TipoUsuario = tipoUsuarioRepository.create({
        descricao
    });

    await tipoUsuarioRepository.save(TipoUsuario);

    //retorna que a criação deu certo status(201) "codigo http"
    return response.status(201).json({TipoUsuario});
    }
};