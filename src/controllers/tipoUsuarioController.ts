import { Router } from 'express';
import { getRepository } from 'typeorm';
import tipoUsuario from '../models/tipoUsuario';

const routes = Router();

routes.post('/tipousuario', async (request, response) => {
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
});
