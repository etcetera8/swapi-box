/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
//import { shallow, mount } from 'enzyme';
//import Adapter from 'enzyme-adapter-react-16';
import SwapiCleaner from './helper.js';
//import mockData from './mockData.js';
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
    const mockMovie = {
      'title': "Attack of the Clones",
      'episode_id': 2,
      'opening_crawl': "There is unrest in the Galactic", 
      'release_date': "02-07-2004",
      'producer': "Rick McCallum"
    }
    const returnedObj = cleaner.randomMovieCall(mockMovie);
    expect(returnedObj).toEqual({"episode": "II", "releaseDate": "02-07-2004", "scrollText": "There is unrest in the Galactic", "title": "Attack of the Clones"});
  })

  it("the getVehicles function shoud return a cleaned vehicle Object", async () => {
    const mockObjectArray = [{name: 'sand buggy', model:'beater', vehicle_class: 'off-road', passengers: '4', notKey: 'should not be in final'}]
    const expectedArray = [{ 
        name: 'sand buggy',
        vehicle_class: 'off-road',
        passengers: '4',
        model: 'beater',
        favorite: false,
        category: 'vehicles' }]
    window.fetch = jest.fn().mockImplementation( () => 
       Promise.resolve({
        status: 200,
        json: () => 
          Promise.resolve({
            status: 200, 
            results: mockObjectArray
          })
    }))

    const returnedObj = await cleaner.getVehicles();

    expect(typeof returnedObj).toEqual('object');
    expect(returnedObj).toEqual(expectedArray)
  })

  it("the getPlanets function should call cleaned planets function and return a cleaned planets array ", async() => {
    const mockArray = [{"name": 'tattooine', "residents": ["place", "anotherPlace"], "population": '10', "climate": "hot", "terrain": 'permafrost', 'notKey': 'data not needed'}]
    const expected =  [ { name: 'tattooine', terrain: 'permafrost', population: '10', climate: 'hot', residents: [ undefined, undefined ], favorite: false, category: 'planets' } ]

    window.fetch = jest.fn().mockImplementation(() => 
      Promise.resolve({
        status: 200,
        json: () => 
        Promise.resolve({
          status:200,
          results: mockArray
        })
      }))
    const returnedObj = await cleaner.getPlanets();
    expect(returnedObj).toEqual(expected)
  })

  it("the cleanResidents function should return an array of residents name" , async() => {
    const mockUrl = ['www.fakeurl.com'];
    window.fetch = jest.fn().mockImplementation(() => 
      Promise.resolve({
        status: 200,
        json: () => 
          Promise.resolve({
            status:200,
            name: 'liea' 
          }) 
      }))

    const returnedArray = await cleaner.cleanResidents(mockUrl)
    expect(returnedArray).toEqual(['liea'])
  })

  it("the getPeople function should return an array of cleaned species", async () => {
    const mockArray = [{name: 'po', homeworld: 'Naboo', population: "5280", species:'human'}]
    const expected =[ { name: 'po', homeworld: undefined, population: undefined, species: undefined, favorite: false, category: 'people' } ]
    
    window.fetch = jest.fn().mockImplementation(() => 
      Promise.resolve({
        status: 200,
        json: () => 
          Promise.resolve({
            status:200,
            results: mockArray
          }) 
      }))
    const returnedObj = await cleaner.getPeople();
    expect(returnedObj).toEqual(expected)
  })

  it("the cleanHomeworld function should return a cleaned world object", async () => {
    const mockArray = [{name: 'po', homeworld: 'Naboo', population: "5280", species:'human'}]
    const expected = [{"homeworld": "naboo", "name": "po", "population": "5280", "species": "human"}]
    window.fetch = jest.fn().mockImplementation(() => 
      Promise.resolve({
        status: 200,
        json: () => 
          Promise.resolve({
            status:200,
            results: mockArray,
            name: 'naboo',
            population: '5280'
          }) 
      }))    
    const returnedObj = await cleaner.cleanHomeworld(mockArray);
    expect(returnedObj).toEqual(expected)
  })

  it("the cleanSpecies function should return a totally cleaned person", async () => {
    const mockArray = [{"homeworld": "naboo", "name": "po", "population": "5280", "species": "endpoint"}]
    const expected = [ { name: 'po', homeworld: 'naboo', population: '5280', species: 'human', favorite: false, category: 'people' } ]
    window.fetch = jest.fn().mockImplementation(() => 
      Promise.resolve({
        status: 200,
        json: () => 
          Promise.resolve({
            status:200,
            name: 'human'
          }) 
      })) 

    const returnedObj = await cleaner.cleanSpecies(mockArray);
    expect(returnedObj).toEqual(expected);
  })

  it("the randomMovieNumber generator should return a number from 1 to 7", () => {
    const testNumber = cleaner.randomMovieNumber();
    expect(testNumber).toBeGreaterThanOrEqual(1);
    expect(testNumber).toBeLessThanOrEqual(7)
  })

})
