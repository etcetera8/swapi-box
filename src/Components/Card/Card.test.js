
import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import { shallow } from 'enzyme';

describe('Card', () => {
  let wrapper;
  const mockFunction = jest.fn();
  const mockPerson = {name:'luke', species:'human', homeworld:'naboo', population: '2'};
  beforeEach( () => {
    wrapper = shallow(<Card
                        className={'activepeople'}
                        setFavorite={mockFunction}
                        person={mockPerson}
                        key={1}
                      />)
  })

  it('should match the snapshot test', () => {
    expect(wrapper).toMatchSnapshot();
  })
})