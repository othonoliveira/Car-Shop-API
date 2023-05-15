const carInfo = {
  id: '13',
  year: 2014,
  model: 'Fox',
  status: true,
  color: 'Silver',
  buyValue: 30.000,
  seatsQty: 5,
  doorsQty: 4,
};

const wrongCarInfo = {
  id: '13',
  year: 2014,
  model: 'Fox',
  status: true,
  color: 'Silver',
  buyValue: 30.000,
  seatsQty: 5,
  doorsQty: 4,
};

const allCars = [
  {
    id: '1',
    model: 'Fox',
    year: 2014,
    color: 'Silver',
    status: true,
    buyValue: 30.000,
    doorsQty: 4,
    seatsQty: 5,
  },
  {
    id: '2',
    model: 'Ferrari',
    year: 2022,
    color: 'Red',
    status: true,
    buyValue: 200.00,
    doorsQty: 2,
    seatsQty: 2,
  },
];

export default {
  carInfo,
  wrongCarInfo,
  allCars,
};