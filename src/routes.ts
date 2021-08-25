import { Router } from 'express';
import tipoUsuarioController from './controllers/tipoUsuarioController';

const routes = Router();

routes.post('/tipousuario', tipoUsuarioController.create);
//routes.post('/tipousuario', usuarioController.create);


export default routes;