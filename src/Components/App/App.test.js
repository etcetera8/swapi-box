import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

window.fetch = jest.fn()

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App', ()=> {

it('has initial state with a scrollText object, people, planets, vehicles and favorites array, and activeCategory default set to null', () => {
  const wrapper = shallow(<App />)
  const expectedState = { 
    scrollText: {},
    people: [],
    planets: [],
    vehicles: [],
    favorites: [],
    activeCategory: null }
  expect(wrapper.state()).toEqual(expectedState)
})

it.skip('the apiCall function should setState of scroll text to an obj', () => {
  window.fetch = jest.fn().mockImplementation()
  const wrapper = shallow(<App />);
  const inst = wrapper.instance();
  const expected = {
      'title': "Attack of the Clones",
      'episode_id': 2,
      'opening_crawl': "There is unrest in the Galactic", 
      'release_date': "02-07-2004",
      'producer': "Rick McCallum"
    }
  expect(wrapper.state().scrollText).toEqual({})
  inst.apiCall('people')
  expect(wrapper.state().scrollText).toEqual(expected)
})

it("the setPeopleState function should update the people state to the array of people", async () => {

})

it("the setPeopleState should aslo set the state of activeCategory to people", async () => {

})

it("the setPlanetState function should update the planet state to the array of planets", async () => {

})

it("the setPlanetState should also set the state of activeCategory to planets", async () => {

})

it("the setVehicleState function should update the vehicle state to array of vehicles", async () => {

})

it("the setVehicleState should aslo set the state of activeCategory to vehicles", async () => {

})

it("the setFavoriteState should update the state when a card is clicked on", () => {

})

it("the setCategory should update the state activeCategory to favorites", () => {

})

it("the activeStatus should set the button class of active if the corresponding buttons name is passed in", () => {

})

it("should match the snapshot", () => {
  
})



})
