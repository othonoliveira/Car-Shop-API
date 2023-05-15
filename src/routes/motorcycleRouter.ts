import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const controller = new MotorcycleController();

const motorcycleRouter = Router();

motorcycleRouter.post('/', controller.addMotorcycle);

motorcycleRouter.get('/', controller.getAllMotorcycles);

motorcycleRouter.get('/:id', controller.getMotorcycleById);

export default motorcycleRouter;