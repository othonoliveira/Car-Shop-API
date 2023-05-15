import MotorcycleInterface from '../Interfaces/IMotorcycle';

const formatNewMotorcycle = (addedMotorcycle: MotorcycleInterface | undefined) => {
  if (addedMotorcycle) {
    const obj = {
      id: addedMotorcycle._id,
      year: addedMotorcycle.year,
      model: addedMotorcycle.model,
      status: !!(addedMotorcycle.status),
      color: addedMotorcycle.color,
      buyValue: addedMotorcycle.buyValue,
      category: addedMotorcycle.category,
      engineCapacity: addedMotorcycle.engineCapacity,
    };
    return obj;
  }
  return null;
};

export default formatNewMotorcycle;