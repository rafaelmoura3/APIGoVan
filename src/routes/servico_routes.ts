import express from 'express';
import controller from '../controllers/servico_controller';
import autenticarToken from '../middleware/extractJWT';

const router = express.Router();

router.get('/', autenticarToken, controller.index);
router.get('/motorista/', autenticarToken, controller.indexMotorista);
router.get('/passageiro/', autenticarToken, controller.indexPassageiro);
router.get('/:id', autenticarToken, controller.show);
router.post('/', autenticarToken, controller.register);
router.post('/search', autenticarToken, controller.search);
router.patch('/:id', autenticarToken, controller.update);
router.delete('/:id', autenticarToken, controller.destroy);

export = router;
