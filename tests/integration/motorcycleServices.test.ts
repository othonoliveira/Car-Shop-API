import { Model } from 'mongoose';
import { expect } from 'chai';
import sinon from 'sinon';
import motorcyclyMocks from '../mocks/motorcyclyMocks';

import MotorcycleServices from '../../src/Services/MotorcycleServices';

const motorcycleService = new MotorcycleServices();

describe('Tests for Motorcycle Services', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('should be possible to create a new motorcycle', async function () {
    sinon.stub(Model, 'create').resolves(motorcyclyMocks.motorcycleInfo);

    const { returnInfo } = await motorcycleService.addMotorcycle(motorcyclyMocks.motorcycleInfo);

    expect(returnInfo).to.be.deep.equal(motorcyclyMocks.motorcycleInfo);
  });

  it('should be possible to retrieve a motorcycle', async function () {
    sinon.stub(Model, 'findById').resolves(motorcyclyMocks.motorcycleInfo);

    const { status, returnInfo } = await motorcycleService.getMotorcycleById('13');

    expect(status).to.be.deep.equal(200);
    expect(returnInfo).to.be.deep.equal(motorcyclyMocks.motorcycleInfo);
  });

  it('should be possible to get a motorcycle with wrong id', async function () {
    sinon.stub(Model, 'findById').resolves(motorcyclyMocks.motorcycleInfo);

    const { returnInfo } = await motorcycleService.getMotorcycleById('22');

    expect(returnInfo).to.be.deep.equal(motorcyclyMocks.motorcycleInfo);
  });

  it('should be possible get all cars', async function () {
    sinon.stub(Model, 'find').resolves(motorcyclyMocks.allMotorcycles);

    const { returnInfo } = await motorcycleService.getAllMotorcycles();

    expect(returnInfo).to.be.deep.equal(motorcyclyMocks.allMotorcycles);
  });
});