import express from 'express';
import controller from '../controllers/servico_controller';
import autenticarToken from '../middleware/extractJWT';

const router = express.Router();

router.get('/', autenticarToken, controller.index);
router.get('/:id', autenticarToken, controller.show);
router.post('/', controller.register);
router.patch('/:id', autenticarToken, controller.update);
router.delete('/:id', autenticarToken, controller.destroy);

export = router;
