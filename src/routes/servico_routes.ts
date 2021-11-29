import express from 'express';
import multer from 'multer';
import controller from '../controllers/servico_controller';
import autenticarToken from '../middleware/extractJWT';
import multerImageConfig from '../configs/multer/upload_imagens';
import multerPdfConfig from '../configs/multer/upload_contratos';

const router = express.Router();
const uploadImagens = multer(multerImageConfig);
const uploadPdf = multer(multerPdfConfig);

router.get('/', autenticarToken, controller.index);
router.get('/motorista/', autenticarToken, controller.indexMotorista);
router.get('/passageiro/', autenticarToken, controller.indexPassageiro);
router.get('/:id', autenticarToken, controller.show);
router.post('/', autenticarToken, controller.register);
router.post('/search', autenticarToken, controller.search);
router.post('/image_upload', autenticarToken, uploadImagens.array('images'), controller.uploadImages);
router.post('/pdf_upload', autenticarToken, uploadPdf.single('pdf'), controller.uploadPdf);
router.put('/contratar/:id', autenticarToken, controller.contratar);
router.patch('/:id', autenticarToken, controller.update);
router.delete('/:id', autenticarToken, controller.destroy);

export = router;
