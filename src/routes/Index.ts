import { Router } from 'express';
import carRouter from './carRoter';

const router = Router();
router.use('/cars', carRouter);

export default router;