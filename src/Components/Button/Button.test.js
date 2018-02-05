import React from 'react';
import Button from './Button';
import { shallow } from 'enzyme';

describe('Button', () => {
  let wrapper;
  const mockFunction = jest.fn();
  
  beforeEach( () => {
    wrapper = shallow(
      <Button
        name={'people'}
        resourceCall={mockFunction}
        className={'peopleActive'}
      />);
  });

  it('should match the snapshot test', () => {
    expect(wrapper).toMatchSnapshot();
  });
});