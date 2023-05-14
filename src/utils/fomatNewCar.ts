import CarInterface from '../Interfaces/ICar';

const formatNewCar = (addedCarInfo: CarInterface | undefined) => {
  if (addedCarInfo) {
    const returnInfo = {
      id: addedCarInfo._id,
      model: addedCarInfo.model,
      year: addedCarInfo.year,
      color: addedCarInfo.color,
      status: !!(addedCarInfo.status),
      buyValue: addedCarInfo.buyValue,
      doorsQty: addedCarInfo.doorsQty,
      seatsQty: addedCarInfo.seatsQty,
    };
    return returnInfo;
  }
  return null;
};

export default formatNewCar;