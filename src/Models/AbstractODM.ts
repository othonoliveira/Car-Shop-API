import { Model, Schema, isValidObjectId, model, models } from 'mongoose';

abstract class AbstractODM<T> {
  protected model: Model<T>;
  protected modelName: string;
  protected schema: Schema;

  constructor(schema: Schema, modelName: string) {
    this.modelName = modelName;
    this.schema = schema;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }
  
  public async add(addInfo: T): Promise<T> {
    return this.model.create({ ...addInfo });
  }

  public async update(_id: string, updateInfo: Partial<T>): Promise<T | null> {
    if (!isValidObjectId(_id)) throw Error();

    return this.model.findByIdAndUpdate(_id, { ...updateInfo });
  }
}

export default AbstractODM;