import { Router } from 'express';
import CarController from '../Controllers/CarController';

const controller = new CarController();

const carRouter = Router();

carRouter.post('/', controller.addCar);

carRouter.get('/', controller.getAllCars);

carRouter.get('/:id', controller.getCarById);

carRouter.put('/:id', controller.updateCar);

export default carRouter;