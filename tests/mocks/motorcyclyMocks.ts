import MotorcycleInterface from '../../src/Interfaces/IMotorcycle';

const motorcycleInfo: MotorcycleInterface = {
  id: '13',
  model: 'Bugatti',
  year: 2023,
  color: 'Red',
  status: true,
  buyValue: 150.00,
  category: 'Street',
  engineCapacity: 1000,
};

const updateInfo: MotorcycleInterface = {
  model: 'Bugatti',
  year: 2013,
  color: 'Blue',
  status: true,
  buyValue: 150.00,
  category: 'Street',
  engineCapacity: 1000,
};

const wrongMotorcycleInfo: MotorcycleInterface = {
  id: '22',
  model: 'Bugatti',
  year: 2023,
  color: 'Red',
  status: true,
  buyValue: 150.00,
  category: 'Street',
  engineCapacity: 1000,
};

const allMotorcycles = [
  {
    id: '13',
    model: 'Bugatti',
    year: 2023,
    color: 'Red',
    status: true,
    buyValue: 150.00,
    category: 'Street',
    engineCapacity: 1000,
  },
  {
    id: '11',
    model: 'Ferrari',
    year: 2023,
    color: 'Platinum',
    status: true,
    buyValue: 140.00,
    category: 'Trail',
    engineCapacity: 800,
  },
];

export default {
  motorcycleInfo,
  wrongMotorcycleInfo,
  updateInfo,
  allMotorcycles,
};