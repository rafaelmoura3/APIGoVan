import http from 'http';
import express from 'express';
import compression from 'compression';
import mongoose from 'mongoose';

import logging from './configs/logging';
import mongoConfig from './configs/mongoose';
import authRotas from './routes/auth_routes';


const NAMESPACE = 'GoVan API';
const router = express();
router.use(express.json());

router.use(compression({
  level: 6
}));

/** Connect to Mongo */
mongoose
  .connect(mongoConfig.mongo.url, mongoConfig.mongo.options)
  .then((result) => {
    logging.info(NAMESPACE, 'Mongo Conectado');
  })
  .catch((error) => {
    logging.error(NAMESPACE, error.message, error);
  });

/** Log the request */
router.use((req, res, next) => {
  /** Log the req */
  logging.info(NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);

  res.on('finish', () => {
    /** Log the res */
    logging.info(NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - STATUS: [${res.statusCode}] - IP: [${req.socket.remoteAddress}]`);

    // WARNING: !AVISO! SÒ DEIXAR HABILITADO EM TESTES!
    // console.log(JSON.stringify(res.req.body, null, 4)); // LOG   REQUEST JSON
    // console.log(res.json()); // LOG *FULL* RESPONSE JSON
  });

  next();
});

/** Routes go here */
router.use(`/api/auth`, authRotas);

/** Error handling */
router.use((req, res, next) => {
  const error = new Error('Erro na requisição');

  res.status(404).json({
    message: error.message
  });
});

const httpServer = http.createServer(router);

httpServer.listen(mongoConfig.server.port, () => logging.info(NAMESPACE, `Servidor on-line em ${mongoConfig.server.hostname}:${mongoConfig.server.port}`));
