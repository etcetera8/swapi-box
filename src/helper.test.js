/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import SwapiCleaner from './helper.js';
import {
          mockMovie,
          expectedMovie,
          mockVehicleArray,
          expectedVehicleArray,
          planetArray,
          expectedPlanetArray,
          mockPersonArray,
          expectedPersonArray,
          cleanedPersonArray
        } from './mockData';

describe('Cleaner function', () => {
  const cleaner = new SwapiCleaner();

  it('should have a root equal to the the root apicall', ()=> {
    expect(cleaner.root).toEqual('https://swapi.co/api/');
  })

  it('romanize function should turn any number from 1-7 into a roman numeral', () => {
    const romans = ["I", "II", "III", "IV", "V", "VI", "VII"];
    for (let i = 1; i === 7; i++) {
      expect(cleaner.romanize(i)).toEqual(romans[i+1])
    }
  })

  it('the randomMovieCall function should take an array as a parameter and return an object', () => {
    const returnedObj = cleaner.randomMovieCall(mockMovie);

    expect(returnedObj).toEqual(expectedMovie);
  })

  describe('getVehicles function', () => {
    it("the getVehicles function shoud return a cleaned vehicle Object", async () => {
      window.fetch = jest.fn().mockImplementation( () => 
         Promise.resolve({
          status: 200,
          json: () => 
            Promise.resolve({
              status: 200, 
              results: mockVehicleArray
            })
      }))
      const returnedObj = await cleaner.getVehicles();

      expect(typeof returnedObj).toEqual('object');
      expect(returnedObj).toEqual(expectedVehicleArray)
    })

    it("the getVehicles function should return an error if it is rejected", async () => {
      window.fetch = jest.fn().mockImplementation( () => 
         Promise.reject({
          status: 500,
      }))
      const returnedObj = await cleaner.getVehicles();
      
      expect(returnedObj).toEqual('error');
    })
  })

  describe('getPlanets function', () => {
    it("the getPlanets function should call cleaned planets function and return a cleaned planets array ", async() => {
      window.fetch = jest.fn().mockImplementation(() => 
        Promise.resolve({
          status: 200,
          json: () => 
          Promise.resolve({
            status:200,
            results: planetArray
          })
        }))
      const returnedObj = await cleaner.getPlanets();
      expect(returnedObj).toEqual(expectedPlanetArray)
    })

    it("the cleanResidents function should return an array of residents name" , async() => {
      const mockUrl = ['www.fakeurl.com'];
      window.fetch = jest.fn().mockImplementation(() => 
        Promise.resolve({
          status: 200,
          name: 'luke',
          json: () => 
            Promise.resolve({
              status:200,
              name: 'liea'
            })
        }));

      const returnedArray = await cleaner.cleanResidents(mockUrl);
      expect(returnedArray).toEqual(['liea']);
    })

    it('the getPlanets function should return an error if it is rejected', async () => {
      window.fetch = jest.fn().mockImplementation(() => 
        Promise.reject({
          status: 500
        }))
      const returnedObj = await cleaner.getPlanets();
      expect(returnedObj).toEqual("error");
    })
})
  describe('getPeople function', () => { 

    it("the getPeople function should return an array of cleaned species", async () => {
      window.fetch = jest.fn().mockImplementation(() => 
        Promise.resolve({
          status: 200,
          json: () => 
            Promise.resolve({
              status:200,
              results: mockPersonArray
            }) 
        }))
      const returnedObj = await cleaner.getPeople();
      expect(returnedObj).toEqual(expectedPersonArray)
    });

    it("the cleanHomeworld function should return a cleaned world object", async () => {
      window.fetch = jest.fn().mockImplementation(() => 
        Promise.resolve({
          status: 200,
          json: () => 
            Promise.resolve({
              status:200,
              results: mockPersonArray,
              name: 'naboo',
              population: '5280'
            }) 
        }))    
      const returnedObj = await cleaner.cleanHomeworld(mockPersonArray);
      expect(returnedObj).toEqual(cleanedPersonArray);
    })

    it("the cleanSpecies function should return a totally cleaned person", async () => {
      const expected = [ { name: 'po', homeworld: 'Naboo', population: '5280', species: 'human', favorite: false, category: 'people' } ]
      window.fetch = jest.fn().mockImplementation(() => 
        Promise.resolve({
          status: 200,
          json: () => 
            Promise.resolve({
              status:200,
              name: 'human'
            }) 
        })) 
      const returnedObj = await cleaner.cleanSpecies(mockPersonArray);
      expect(returnedObj).toEqual(expected);
    })

    it('the getPeople function should return an error if it is rejected', async () => {
      window.fetch = jest.fn().mockImplementation(() => 
        Promise.reject({
          status: 500
        }))
      const returnedObj = await cleaner.getPeople();
      expect(returnedObj).toEqual("error")
    })
  })

  it("the randomMovieNumber generator should return a number from 1 to 7", () => {
    const testNumber = cleaner.randomMovieNumber();
    expect(testNumber).toBeGreaterThanOrEqual(1);
    expect(testNumber).toBeLessThanOrEqual(7)
  })

})
