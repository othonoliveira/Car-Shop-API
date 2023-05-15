export default interface VehicleInterface {
  id?: string | undefined;
  _id?: string | undefined;
  year: number;
  model: string;
  status?: boolean | undefined;
  color: string;
  buyValue: number;
}