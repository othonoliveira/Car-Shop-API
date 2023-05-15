export default interface MotorcycleInterface {
  id?: string,
  _id?: string,
  model: string,
  year: number,
  color: string,
  status?: boolean,
  buyValue: number,
  category: 'Street' | 'Custom' | 'Trail',
  engineCapacity: number,
}