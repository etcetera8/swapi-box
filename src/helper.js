export default class SwapiCleaner {
  constructor(responseData) {
    this.responseData = responseData;
    this.root = `https://swapi.co/api/`
  }  

  randomMovieCall(movieArray) {
    const romanId = this.romanize(movieArray.episode_id);

    return {
      scrollText: movieArray.opening_crawl,
      title: movieArray.title,
      releaseDate: movieArray.release_date,
      episode: romanId
    };
  }

  fetchAndJson = async(url) => {
    const promiseResponse = await fetch(url);
    return await promiseResponse.json()
  }

  getVehicles = async() => {
    const arrayResults = await this.fetchAndJson(`${this.root}vehicles`)
      const cleanedVehicles = await arrayResults.results.map( vehicle => {
        const {name, vehicle_class, passengers, model } = vehicle;
        return ({
          name, 
          vehicle_class, 
          passengers, 
          model, 
          favorite: false, 
          category: 'vehicles'})
      })
      return Promise.all(cleanedVehicles);
  }

  getPlanets = async() => {
    const arrayResults = await this.fetchAndJson(`${this.root}planets`)
    const cleanedPlanets = await this.cleanPlanet(arrayResults.results)
    return cleanedPlanets
  }

  cleanPlanet = async(planetArray) => {
    planetArray = planetArray.splice(0,3);
    const unresolvedPlanets = await planetArray.map(async (planet) => {
      const {name, terrain, population, climate, residents } = planet;
      const cleanedResidents = await this.cleanResidents(residents);
      return ({
        name, 
        terrain, 
        population, 
        climate, 
        residents: cleanedResidents, 
        favorite: false, 
        category: 'planets'});
    })
    return Promise.all(unresolvedPlanets);
  }

  cleanResidents = async(residents) => {
    const unresolvedResidents = await residents.map(async (residentUrl) => {
      const residentObject = await this.fetchAndJson(residentUrl);
      const {name} = residentObject;
      return (name)
    })
    return Promise.all(unresolvedResidents);
  }

  getPeople = async() => {
      const arrayResults = await this.fetchAndJson(`${this.root}people`)
      const cleanedHomeworld = await this.cleanHomeworld(arrayResults.results)
      const cleanedSpecies = await this.cleanSpecies(cleanedHomeworld);
      return cleanedSpecies;
  }

  cleanHomeworld = async(peopleArray) => {
    peopleArray = peopleArray.splice(0,3);
    const unresolvedPeople = await peopleArray.map(async (person) => {
      const homeworldObject = await this.fetchAndJson(person.homeworld)
      const { name, population } = homeworldObject;
      return ({...person, homeworld: name, population })      
    })
    return Promise.all(unresolvedPeople)
  }   

  cleanSpecies = async(peopleArray) => {
    const unresolvedPeople = await peopleArray.map(async (person) => {
      const species = await this.fetchAndJson(person.species)
      const {name} = species;
      const { homeworld, population } = person;
      return ({
        name: person.name,
        homeworld,
        population,
        species: name,
        favorite: false,
        category: 'people'
      })
    })
    return Promise.all(unresolvedPeople)
  }

  randomMovieNumber = () => {
    return Math.floor(Math.random() * 7 + 1)
  }

  romanize = (num) => {
    let romNumeral = '';
    switch (num) {
      case 1:
        romNumeral = "I"
        break;
      case 2: 
        romNumeral = "II"
        break;
      case 3:
        romNumeral = "III"
        break;
      case 4: 
        romNumeral = "IV"
        break;
      case 5: 
        romNumeral = "V"
        break;
      case 6: 
        romNumeral = "VI"
        break;
      case 7:
        romNumeral = "VII"
        break;
      default:
        return "An episode"
    }
    return romNumeral;
  }
}