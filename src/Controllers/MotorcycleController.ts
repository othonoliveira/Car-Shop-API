import { Request, Response } from 'express';
import MotorcycleServices from '../Services/MotorcycleServices';
import formatNewMotorcycle from '../utils/formatNewMotorcycle';

export default class MotorcycleController {
  private service: MotorcycleServices;

  constructor() {
    this.service = new MotorcycleServices();
  }

  public addMotorcycle = async (req: Request, res: Response) => {
    const motorcycleInfo = req.body;
    const { statusHTTP, returnInfo } = await this.service.addMotorcycle(motorcycleInfo);
    const message = formatNewMotorcycle(returnInfo);
    
    return res.status(statusHTTP).json(message);
  };
}