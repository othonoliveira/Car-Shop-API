import MotorcycleInterface from '../Interfaces/IMotorcycle';
import MotorcycleModel from '../Models/MotorcycleModel';

export default class MotorcycleServices {
  public async addMotorcycle(motorcycleInfo: MotorcycleInterface) {
    const motorcycleODM = new MotorcycleModel();
    const result = motorcycleODM.addMotorcycle(motorcycleInfo);
    const returnInfo = await Promise.resolve(result);
    return { statusHTTP: 201, returnInfo };
  }
}