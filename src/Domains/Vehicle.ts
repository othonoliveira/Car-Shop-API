import VehicleInterface from '../Interfaces/IVehicle';

export default class VehicleDomain {
  protected id: string | undefined;
  protected year: number;
  protected model: string;
  protected status: boolean | undefined;
  protected color: string;
  protected buyValue: number;

  constructor(vehicle: VehicleInterface) {
    this.id = vehicle._id || undefined;
    this.year = vehicle.year;
    this.model = vehicle.model;
    this.status = vehicle.status || undefined;
    this.color = vehicle.color;
    this.buyValue = vehicle.buyValue;
  }
}