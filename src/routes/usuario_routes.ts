import express from 'express';
import controller from '../controllers/usuario_controller';
import autenticarToken from '../middleware/extractJWT';

const router = express.Router();

router.patch('/change_password/:id', controller.changePassword);

router.get('/', autenticarToken, controller.index);
router.get('/:id', autenticarToken, controller.show);
router.patch('/:id', autenticarToken, controller.update);
router.post('/', controller.register);
router.delete('/:id', autenticarToken, controller.destroy);

export = router;
