import ICar from '../Interfaces/ICar';

export default class CarDomain {
  protected id: string | undefined;
  protected year: number;
  protected model: string;
  protected status: boolean | undefined;
  protected color: string;
  protected buyValue: number;
  private seatsQty: number;
  private doorsQty: number;

  constructor(car: ICar) {
    this.id = car.id || undefined;
    this.year = car.year;
    this.model = car.model;
    this.status = car.status || undefined;
    this.color = car.color;
    this.buyValue = car.buyValue;
    this.seatsQty = car.seatsQty;
    this.doorsQty = car.doorsQty;
  }
}