import { Request, Response } from 'express';
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
}