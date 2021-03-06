/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow, mount } from 'enzyme';


window.fetch = jest.fn();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App', ()=> {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
    const mockArray = [{category:"people",favorite:false, homeworld:"Tatooine", name:"Luke Skywalker", population:"200000", species:"Human"}];
    
    global.localStorage = {
      getItem(keyword) {
        if (!global.localStorage[keyword]) {
          return null;
        }
        return JSON.stringify(global.localStorage[keyword]);
      },
      setItem(keyword, value) {
        global.localStorage[keyword] = value;
      },
      people: mockArray
    };
  });

  it('has initial state with a scrollText object, people, planets, vehicles and favorites array, and activeCategory default set to null', () => {
    const wrapper = shallow(<App />);
    const expectedState = { 
      scrollText: {},
      people: [],
      planets: [],
      vehicles: [],
      favorites: [],
      activeCategory: null,
      errorStatus: false };
    expect(wrapper.state()).toEqual(expectedState);
  });

  it('the apiCall function should setState of scroll text to an obj', async () => {
    const mock = {
      'title': "Attack of the Clones",
      'episode_id': 2, 
      'opening_crawl': "There is unrest in the Galactic", 
      'release_date': "02-07-2004", 
      'producer': "Rick McCallum"
    };

    window.fetch = jest.fn().mockImplementation( () => {
      Promise.resolve({
        status: 200,
        results: mock
      });
    });
    const wrapper = shallow(<App />);
    const inst = wrapper.instance();
  
    await inst.randomMovieScroll('films');
    expect(typeof wrapper.state().scrollText).toEqual('object');
    expect(Object.keys(wrapper.state().scrollText)).toEqual(['scrollText', 'title', 'releaseDate', 'episode']);
  });

  it("the setTheState function should update the people state to the array of the input category", async () => {
    const mockArray = [{category:"people",favorite:false, homeworld:"Tatooine", name:"Luke Skywalker", population:"200000", species:"Human"}];
    const mockFunc = jest.fn()
    window.fetch = jest.fn().mockImplementation(() => 
      Promise.resolve({
        status: 200,
        json: () => Promise.resolve({
          status: 200,
          results: mockArray
        })
      }));
    const inst = wrapper.instance();
    await inst.setTheState('people', mockFunc);

    expect(wrapper.state().people).toEqual(mockArray);
  });

  it("the setFavoriteState should update the favoriteState when a card is clicked on and switch the key from false to favorite", () => {
    wrapper.setState({
      people: [{
        name:'luke', 
        species: 'human', 
        homeworld: 'naboo', 
        population: '10', 
        favorite: false
      }]
    });
    const expected = {
      name:'luke', 
      species: 'human', 
      homeworld: 'naboo', 
      population: '10', 
      favorite: true
    };
    const inst = wrapper.instance();
    
    expect(wrapper.state().people[0].favorite).toEqual(false);
    inst.setFavoriteState('luke', 'people');
    expect(wrapper.state().people[0].favorite).toEqual(true);

    expect(wrapper.state().favorites.length).toBeGreaterThan(0);
    expect(wrapper.state().favorites[0]).toEqual(expected);
    expect(wrapper.state().people[0].favorite).toEqual(true);
  });

  it("the setFavoriteState should take out the card if ran on it again", () => {
    const personArray = [{
      name:'luke', 
      species: 'human', 
      homeworld: 'naboo', 
      population: '10', 
      favorite: true
    }];
    wrapper.setState({favorites: personArray, people: personArray});
    const inst = wrapper.instance();

    expect(wrapper.state().favorites.length).toEqual(1);
    expect(wrapper.state().people).toEqual(personArray);

    inst.setFavoriteState('luke', 'people');

    expect(wrapper.state().people).toEqual(personArray);
    expect(wrapper.state().favorites.length).toEqual(0);
  });

  it("the setCategory should be null at first then update the state activeCategory to the argument passed it", () => {
    expect(wrapper.state().activeCategory).toEqual(null);
    const inst = wrapper.instance();
    inst.setCategory('planets');
    expect(wrapper.state().activeCategory).toEqual('planets');
  });

  it("the activeStatus function should return a blank string if the states activeCategory doesn't match the category passed in", () => {
    const inst = wrapper.instance();
    let className = inst.activeStatus('people');
    expect(className).toEqual('');
    wrapper.setState({activeCategory: 'people'});
    className = inst.activeStatus('people');
    expect(className).toEqual('activepeople');
  });

  it("should match the snapshot", () => {
    const personArray = [{
      name:'luke', 
      species: 'human', 
      homeworld: 'naboo', 
      population: '10', 
      favorite: true
    }];
    const scrollObject = {
      scrollText: "Once upon a time", 
      title: "benjamins buttons", 
      releaseDate:"05-07-87", 
      episode: "v"
    };
    wrapper.setState({
      scrollText: scrollObject,
      people: personArray,
      activeCategory: 'people'
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('the Button Component should fire off the setTheState function and the activeStatus function and set the state for each', () => {
    wrapper = mount(<App />)

    wrapper.find('Button').first().simulate('click');
    expect(wrapper.state().people.length).toEqual(1);
    expect(wrapper.state().activeCategory).toEqual('people');
  })

});
