import { Router } from 'express';
import carRouter from './carRoter';
import motorcycleRouter from './motorcycleRouter';

const router = Router();

router.use('/cars', carRouter);

router.use('/motorcycles', motorcycleRouter);

export default router;