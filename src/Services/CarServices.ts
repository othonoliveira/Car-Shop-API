import CarInterface from '../Interfaces/ICar';
import CarModel from '../Models/CarModel';

export default class CarServices {
  public async addCar(carInfo: CarInterface) {
    const carODM = new CarModel();
    const result = carODM.addCar(carInfo);
    const returnInfo = await Promise.resolve(result);
    return { statusHTTP: 201, returnInfo };
  }
}