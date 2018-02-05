import React from 'react';
import ScrollContainer from './ScrollContainer';
import { shallow } from 'enzyme';

describe('ScrollContainer', () => {
  const wrapper = shallow(<ScrollContainer 
    movieData={
      {
        scrollText: "once upon a time",
        episode:"v", 
        title:"A new Hope", 
        releaseDate:"05-1985"
      }
    }
  />);

  it('should match the snapshot test', () => {
    expect(wrapper).toMatchSnapshot();
  });
});