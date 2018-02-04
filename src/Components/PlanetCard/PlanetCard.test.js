import React from 'react';
import ReactDOM from 'react-dom';
import PlanetCard from './PlanetCard';
import { shallow } from 'enzyme';

describe('PlanetCard', () => {
  let wrapper;
  const mockFunction = jest.fn();
  
  beforeEach( () => {
    wrapper = shallow(<PlanetCard
                        className={'activepeople'}
                        setFavorite={mockFunction}
                        name={'naboo'}
                        climate={'desert'}
                        terrain={'dunes'}
                        population={'20'}
                        residents={['liea', 'darth', 'luke']}
                        key={1}
                      />)
  })

  it('should match the snapshot test', () => {
    expect(wrapper).toMatchSnapshot();
  })
})