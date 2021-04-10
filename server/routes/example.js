import express from 'express';

import { getExample } from '../controllers/example.js';

const router = express.Router();

router.get('/', getExample);

export default router;