/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Cleaner from './helper';
import MockData from './mockData';

describe('Cleaner function' () => {
  const cleaner = new Cleaner(mockData);

  test('cleaner has data in an object', ()=> {
    expect(typeof district.responseData).toBe('object');
  })

})
