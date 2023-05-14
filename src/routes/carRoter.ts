import { Router } from 'express';
import CarController from '../Controllers/CarController';

const controler = new CarController();

const carRouter = Router();

carRouter.post('/', controler.addCar);

export default carRouter;