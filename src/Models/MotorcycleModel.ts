import { Model, Schema, model, models } from 'mongoose';
import MotorcycleInterface from '../Interfaces/IMotorcycle';

export default class MotorcycleModel {
  private schema: Schema;
  private model: Model<MotorcycleInterface>;

  constructor() {
    this.schema = new Schema<MotorcycleInterface>({
      year: { type: Number, required: true },
      model: { type: String, required: true },
      status: Boolean,
      color: { type: String, required: true },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    });
    this.model = models.Motorcycle || model('Motorcycle', this.schema);
  }

  public async addMotorcycle(motorcycleInfo: MotorcycleInterface): Promise<MotorcycleInterface> {
    const addedMotorcycle = await this.model.create({ ...motorcycleInfo });
    
    return addedMotorcycle;
  }

  public async getAllMotorcycles() {
    const motorcycles = await this.model.find();
    
    return motorcycles;
  }

  public async getMotorcycleById(id: string) {
    const motorcycle = await this.model.findById(id);

    return motorcycle;
  }

  public async updateMotorcycle(_id: string, updateInfo: MotorcycleInterface) {
    const updatedMotorcycle = await this.model.findByIdAndUpdate(_id, { ...updateInfo });

    return updatedMotorcycle;
  }
}