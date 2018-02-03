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

  it.only("the getVehicles function shoud return a cleaned vehicle Object", async () => {
    const mockObject = [{name: 'sand buggy', model:'beater', vehicle_class: 'off-road', passengers: '4', notKey: 'should not be in final'}]

    window.fetch = jest.fn().mockImplementation(() => 
      Promise.resolve({
        status: 200,
        json: () => Promise.resolve(mockObject)
      }))

    const returnedObj = await cleaner.getVehicles();

    console.log(returnedObj);
  })

  it("the getPlanets function should call cleaned planets function and return a cleaned planets array ", async() => {
    const mockArray = [{"name": 'tattooine', "residents": ["place", "anotherPlace"], "population": '10', "climate": "hot", "terrain": 'permafrost'}]
    window.fetch = jest.fn().mockImplementation(() => 
      Promise.resolve({
        status: 200,
        json: () => Promise.resolve(mockArray)
      }))
    const returnedObj = await cleaner.getPlanets();
    console.log(returnedObj);
    expect(cleaner.cleanPlanet).toHaveBeenCalled()
  })

  it("the cleanResidents function should return an array of resident names" , async() => {
    //need to pass in an fake array
    const returnedObj = await cleaner.cleanResidents()
  })

  it("the getPeople function should return an array of cleaned species", async () => {
    //need to test the correct params are being passed in
    //test error
    //other functions are called
    const returnedObj = await cleaner.getPeople()
  })

  it("the cleanHomeworld function should return a cleaned world object", async () => {
    //needs to take in a fake array
    const returnedObj = await cleaner.cleanHomeworld();

  })

  it("the cleanSpecies function should return a totally cleaned person", async () => {
    //needs to take in a fake array of people objects
    const returnedObj = await cleaner.cleanSpecies();
  })

  it("the randomMovieNumber generator should return a number from 1 to 7", () => {
    const testNumber = cleaner.randomMovieNumber();
    expect(testNumber).toBeGreaterThanOrEqual(1);
    expect(testNumber).toBeLessThanOrEqual(7)
  })

})
