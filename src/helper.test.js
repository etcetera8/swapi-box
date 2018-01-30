/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
//import { shallow, mount } from 'enzyme';
//import Adapter from 'enzyme-adapter-react-16';
import Cleaner from './helper';
import Mock from './mockData';

describe('Cleaner function', () => {
  //const cleaner = new Cleaner(Mock.mockData);

  test('cleaner has data in an object', ()=> {
    console.log(Mock)
    console.log(cleaner.responseData)
    expect(typeof cleaner.responseData).toBe('object');
  })

})
