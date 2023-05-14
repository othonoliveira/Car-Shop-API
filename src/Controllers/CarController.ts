import { Request, Response } from 'express';
import CarServices from '../Services/CarServices';
import CarInterface from '../Interfaces/ICar';
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
}