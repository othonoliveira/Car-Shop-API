import MotorcycleInterface from '../Interfaces/IMotorcycle';
import MotorcycleModel from '../Models/MotorcycleModel';

export default class MotorcycleServices {
  public async addMotorcycle(motorcycleInfo: MotorcycleInterface) {
    const motorcycleODM = new MotorcycleModel();
    const result = motorcycleODM.addMotorcycle(motorcycleInfo);
    const returnInfo = await Promise.resolve(result);
    return { statusHTTP: 201, returnInfo };
  }

  public async getAllMotorcycles() {
    const carODM = new MotorcycleModel();
    const returnInfo = await carODM.getAllMotorcycles();
    return { status: 200, returnInfo };
  }

  public async getMotorcycleById(id: string) {
    const carODM = new MotorcycleModel();
    const returnInfo = await carODM.getMotorcycleById(id);
    return { status: 200, returnInfo };
  }

  public async updateMotorcycle(id: string, updateInfo: MotorcycleInterface) {
    const carODM = new MotorcycleModel();
    const returnInfo = await carODM.updateMotorcycle(id, updateInfo);
    return { status: 200, returnInfo };
  }
}