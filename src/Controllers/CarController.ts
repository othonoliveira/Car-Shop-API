import { Request, Response, NextFunction } from 'express';
import { isValidObjectId } from 'mongoose';
import CarInterface from '../Interfaces/ICar';
import CarServices from '../Services/CarServices';
import formatNewCar from '../utils/fomatNewCar';

export default class CarController {
  constructor() {
    this.carService = new CarServices();
  }

  private carService: CarServices;

  public addCar = async (req: Request, res: Response) => {
    const { model, year, color, status, buyValue, doorsQty, seatsQty } = req.body;
    const carInfo: CarInterface = {
      model,
      year,
      color,
      status,
      buyValue,
      doorsQty,
      seatsQty,
    };
 
    const { statusHTTP, returnInfo } = await this.carService.addCar(carInfo);
    const message = formatNewCar(returnInfo);

    return res.status(statusHTTP).json(message);
  };

  public getAllCars = async (req: Request, res: Response) => {
    const { status, returnInfo } = await this.carService.getAllCars();
    
    const message = returnInfo.map((car) => formatNewCar(car));

    return res.status(status).json(message);
  };

  public getCarById = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const isValid = isValidObjectId(id);
    if (!isValid) return res.status(422).json({ message: 'Invalid mongo id' });
    try {
      const { status, returnInfo } = await this.carService.getCarById(id);
      if (!returnInfo) return res.status(404).json({ message: 'Car not found' }); 
      const message = formatNewCar(returnInfo);
  
      return res.status(status).json(message);
    } catch (error) {
      return next(error);
    }
  };
  public updateCar = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const updateInfo = req.body;
    
    const isValid = isValidObjectId(id);
    if (!isValid) return res.status(422).json({ message: 'Invalid mongo id' });

    try {
      await this.carService.updateCar(id, updateInfo);
      const { status, returnInfo } = await this.carService.getCarById(id);
      if (!returnInfo) return res.status(404).json({ message: 'Car not found' }); 
      const message = formatNewCar(returnInfo);
  
      return res.status(status).json(message);
    } catch (error) {
      return next(error);
    }
  };
}