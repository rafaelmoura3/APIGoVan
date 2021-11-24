import multer, { Options } from 'multer';
import path from 'path';

export default {
  storage: multer.diskStorage({
    destination: path.join(__dirname, '..', '..', '..', 'uploads', 'pdf'),
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  }),
  limits: {
    fileSize: 8 * 1024 * 1024, // 4MB
  },
  fileFilter: (req, file, cb) => {
    const mimeTypes = [
      'application/pdf',
    ];

    if (!mimeTypes.includes(file.mimetype)) {
      return cb(null, false);
    }

    cb(null, true);
  },
} as Options;