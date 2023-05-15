interface CarInterface {
  id?: string,
  _id?: string,
  year: number,
  model: string,
  status?: boolean,
  color: string,
  buyValue: number,
  seatsQty: number,
  doorsQty: number,
}

export default CarInterface;