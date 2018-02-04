import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import { shallow } from 'enzyme';

describe('Button', () => {
  let wrapper;
  const mockFunction = jest.fn();
  const mockArray = [{name: 'luke', homeworld:'naboo', species:'human', population: '20'}]
  
  beforeEach( () => {
    wrapper = shallow(<Button
                        name={'people'}
                        resourceCall={mockFunction}
                        className={'peopleActive'}
                      />)
  })

  it('should match the snapshot test', () => {
    expect(wrapper).toMatchSnapshot();
  })
})