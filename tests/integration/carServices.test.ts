import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import carMocks from '../mocks/carMocks';

import CarServices from '../../src/Services/CarServices';

const carService = new CarServices();

describe('Tests for Car Services', function () {
  afterEach(function () {
    sinon.restore();
  });
  
  it('should create a new car with the correct information', async function () {
    sinon.stub(Model, 'create').resolves(carMocks.carInfo);

    const { returnInfo } = await carService.addCar(carMocks.carInfo);

    expect(returnInfo).to.be.deep.equal(carMocks.carInfo);
  });

  it('should be possible to get a car by id', async function () {
    sinon.stub(Model, 'findById').resolves(carMocks.carInfo);

    const { returnInfo } = await carService.getCarById('13');

    expect(returnInfo).to.be.deep.equal(carMocks.carInfo);
  });

  it('should should not be possible to get a car with wrong id', async function () {
    sinon.stub(Model, 'findById').resolves(carMocks.carInfo);

    const { returnInfo } = await carService.getCarById('bxcxc');

    expect(returnInfo).not.to.be.equal(carMocks.wrongCarInfo);
  });

  it('should be possible get all cars', async function () {
    sinon.stub(Model, 'find').resolves(carMocks.allCars);

    const { returnInfo } = await carService.getAllCars();

    expect(returnInfo).to.be.deep.equal(carMocks.allCars);
  });

  it('should be possible to update a car', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(carMocks.carInfo);

    const { returnInfo } = await carService.updateCar('13', carMocks.carInfo);

    expect(returnInfo).to.be.deep.equal(carMocks.carInfo);
  });
});