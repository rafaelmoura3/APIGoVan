import { Router } from 'express';
import tipoUsuarioController from './controllers/tipoUsuarioController';
import usuarioController from './controllers/usuarioContoller';
import authController from './controllers/authContoller';
import authMiddleware from './middlewares/authmiddleware';

const routes = Router();

routes.post('/tipousuario', tipoUsuarioController.create);
routes.post('/usuario', usuarioController.store);
routes.post('/auth', authController.store);
routes.get('/usuario',authMiddleware , usuarioController.index);

export default routes;