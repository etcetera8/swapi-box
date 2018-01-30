/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
//import { shallow, mount } from 'enzyme';
//import Adapter from 'enzyme-adapter-react-16';
import SwapiCleaner from './helper.js';
import mockData from './mockData.js';
describe('Cleaner function', () => {
  const cleaner = new SwapiCleaner(mockData);

  it('cleaner has data in an object', ()=> {
    console.log(Object.keys(cleaner.responseData));
    expect(typeof cleaner.responseData).toBe('object');
  })

  it('the resonseData object should have keys', () => {
    const expected = [ 'people', 'planets', 'vehicles', 'films' ];
    expect(Object.keys(cleaner.responseData)).toEqual(expected)
  })

  it('romanize function should turn any number from 1-7 into a roman numeral', () => {
    const romans = ["I", "II", "III", "IV", "V", "VI", "VII"];
    for (let i = 1; i === 7; i++) {
      expect(cleaner.romanize(i)).toEqual(romans[i+1])
    }
  })

  //random movie test


})
