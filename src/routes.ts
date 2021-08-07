import { Router } from 'express';
import tipoUsuarioController from './controllers/tipoUsuarioController';

const routes = Router();

routes.post('/tipousuario', tipoUsuarioController.create);

export default routes;