import React from 'react';
import ReactDOM from 'react-dom';
import VehicleCard from './VehicleCard';
import { shallow } from 'enzyme';

describe('VehicleCard', () => {
  let wrapper;
  const mockFunction = jest.fn();
  const mockVehicle = {name:'racer', model: 'speedy', passengers:'20', vehicle_class:'old'}
  beforeEach( () => {
    wrapper = shallow(<VehicleCard
                        className={'bike'}
                        setFavorite={mockFunction}
                        vehicle={mockVehicle}
                        key={1}
                      />)
  })

  it('should match the snapshot test', () => {
    expect(wrapper).toMatchSnapshot();
  })
})