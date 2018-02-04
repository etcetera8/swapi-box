import React from 'react';
import ReactDOM from 'react-dom';
import CardContainer from './CardContainer';
import { shallow } from 'enzyme';

describe('CardContainer', () => {
  let wrapper;
  const mockFunction = jest.fn();
  const mockArray = [{name: 'luke', homeworld:'naboo', species:'human', population: '20'}]
  beforeEach( () => {
    wrapper = shallow(<CardContainer 
                        activeCategory='people' 
                        setFavorite={mockFunction}
                        favorites={[]}
                        people={mockArray}
                        planets={[]}
                        vehicles={[]}
                      />)
  })
  it('should match the snapshot test', () => {
    expect(wrapper).toMatchSnapshot();
  })
})