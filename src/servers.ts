import express, { request, response } from 'express';
import { getRepository } from 'typeorm';
import tipoUsuario from './models/tipoUsuario';

import './database/connection';

const app = express();
app.use(express.json());

//rota = conjunto de instruções
//recuso = usuario

//metodos http = get, post, put, delete

//Query Params: http://localhost:3333/users?search=diego
//Route Params: http://localhost:3333/users/1 (identificar um recurso)
//Body: http://localhost:3333/users/1 ()

app.listen(3000, () => {
    console.log('Server on port', 3000)
})

app.post('/tipousuario', async (request, response) => {
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


