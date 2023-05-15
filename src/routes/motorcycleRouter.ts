import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const controller = new MotorcycleController();

const motorcycleRouter = Router();

motorcycleRouter.post('/', controller.addMotorcycle);

export default motorcycleRouter;