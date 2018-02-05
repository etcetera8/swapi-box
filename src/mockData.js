/* eslint-disable */
export const mockMovie = {
              'title': "Attack of the Clones",
              'episode_id': 2,
              'opening_crawl': "There is unrest in the Galactic", 
              'release_date': "02-07-2004",
              'producer': "Rick McCallum"
            };

export const expectedMovie = {
              "episode": "II", 
              "releaseDate": "02-07-2004", 
              "scrollText": "There is unrest in the Galactic", 
              "title": "Attack of the Clones"
            };

export const mockVehicleArray = [{
              name: 'sand buggy', 
              model:'beater', 
              vehicle_class: 'off-road', 
              passengers: '4', 
              notKey: 'should not be in final'
            }];

export const expectedVehicleArray = [{
              name: 'sand buggy', 
              vehicle_class: 'off-road', 
              passengers: '4', 
              model: 'beater', 
              favorite: false, 
              category: 'vehicles'
            }];

export const planetArray = [{
              "name": 'tattooine', 
              "residents": ["place", "anotherPlace"], 
              "population": '10', 
              "climate": "hot", 
              "terrain": 'permafrost', 
              "notKey": 'data not needed'
            }];

export const expectedPlanetArray = [{ 
              name: 'tattooine', 
              terrain: 'permafrost', 
              population: '10', 
              climate: 'hot', 
              residents: [ undefined, undefined ], 
              favorite: false, 
              category: 'planets'
            }];

export const mockPersonArray = [{
              name: 'po', 
              homeworld: 'Naboo', 
              population: "5280", 
              species:'human'
            }];

export const expectedPersonArray =[{ 
              name: 'po', 
              homeworld: undefined, 
              population: undefined, 
              species: undefined, 
              favorite: false, 
              category: 'people'
            }];

export const cleanedPersonArray = [{
              "homeworld": "naboo", 
              "name": "po", 
              "population": "5280", 
              "species": "human"
            }];

