import { Model, Schema, model, models } from 'mongoose';
import CarInterface from '../Interfaces/ICar';

export default class CarModel {
  private model: Model<CarInterface>;
  private schema: Schema;

  constructor() {
    this.schema = new Schema<CarInterface>({
      year: { type: Number, required: true },
      model: { type: String, required: true },
      status: Boolean,
      color: { type: String, required: true },
      buyValue: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
    });
    this.model = models.Car || model('Car', this.schema);
  }

  public async addCar(carInfo: CarInterface): Promise<CarInterface> {
    const newCar = await this.model.create({ ...carInfo });
    return newCar;
  }
}