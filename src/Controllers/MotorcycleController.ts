import { NextFunction, Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
import MotorcycleServices from '../Services/MotorcycleServices';
import formatNewMotorcycle from '../utils/formatNewMotorcycle';

export default class MotorcycleController {
  private motorcycleService: MotorcycleServices;

  constructor() {
    this.motorcycleService = new MotorcycleServices();
  }

  public addMotorcycle = async (req: Request, res: Response) => {
    const motorcycleInfo = req.body;
    const { statusHTTP, returnInfo } = await this.motorcycleService.addMotorcycle(motorcycleInfo);
    const message = formatNewMotorcycle(returnInfo);

    return res.status(statusHTTP).json(message);
  };

  public getAllMotorcycles = async (req: Request, res: Response) => {
    const { status, returnInfo } = await this.motorcycleService.getAllMotorcycles();
    
    const message = returnInfo.map((motorcycle) => formatNewMotorcycle(motorcycle));

    return res.status(status).json(message);
  };

  public getMotorcycleById = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const isValid = isValidObjectId(id);
    if (!isValid) return res.status(422).json({ message: 'Invalid mongo id' });
    try {
      const { status, returnInfo } = await this.motorcycleService.getMotorcycleById(id);
      if (!returnInfo) return res.status(404).json({ message: 'Motorcycle not found' }); 
      const message = formatNewMotorcycle(returnInfo);
  
      return res.status(status).json(message);
    } catch (error) {
      return next(error);
    }
  };
}