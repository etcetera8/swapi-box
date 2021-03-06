import React from 'react';
import PlanetCard from './PlanetCard';
import { shallow } from 'enzyme';

describe('PlanetCard', () => {
  const mockFunction = jest.fn();
  const mockPlanet = {
    name:'naboo', 
    climate:'desert', 
    terrain:'dunes', 
    population: '20', 
    residents: ['liea', 'darth', 'luke']
  };
  
  const wrapper = shallow(
    <PlanetCard
      className={'activepeople'}
      setFavorite={mockFunction}
      planet={mockPlanet}
      key={1}
    />);
  
  it('should match the snapshot test', () => {
    expect(wrapper).toMatchSnapshot();
  });
});