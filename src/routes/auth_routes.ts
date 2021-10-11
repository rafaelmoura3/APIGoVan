import express from 'express';
import controller from '../controllers/auth_controller';
import autenticarToken from '../middleware/extractJWT';

const router = express.Router();

router.post('/login', controller.login);
router.get('/validate', controller.validateToken);

export = router;
