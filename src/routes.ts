import { Router } from 'express';
import usuarioController from './controllers/usuarioContoller';
import loginController from './controllers/LoginController';
import authMiddleware from './middlewares/authmiddleware';

const routes = Router();


routes.post('/usuario', usuarioController.store);
routes.post('/login', loginController.login);
routes.get('/usuario',authMiddleware , usuarioController.index);

export default routes;