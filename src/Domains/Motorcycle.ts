import MotorcycleInterface from '../Interfaces/IMotorcycle';

export default class MotorcycleDomain {
  protected id: string | undefined;
  protected year: number;
  protected model: string;
  protected status: boolean | undefined;
  protected color: string;
  protected buyValue: number;
  private category: 'Trail' | 'Street' | 'Custom';
  private engineCapacity: number;

  constructor(motocycle: MotorcycleInterface) {
    this.id = motocycle._id || undefined;
    this.year = motocycle.year;
    this.model = motocycle.model;
    this.status = motocycle.status || undefined;
    this.color = motocycle.color;
    this.buyValue = motocycle.buyValue;
    this.category = motocycle.category;
    this.engineCapacity = motocycle.engineCapacity;
  }
}