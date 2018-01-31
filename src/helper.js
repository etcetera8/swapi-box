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

  getPeople = async() => {
    const peopleArray =  await fetch(`${this.root}people`)
      .then( response => response.json())
      const cleaned = await this.cleanHomeworld(peopleArray.results)
      const cleanedSpecies = await this.cleanSpecies(cleaned);
      return cleanedSpecies;
  }

  cleanHomeworld = async(peopleArray) => {
    peopleArray = peopleArray.splice(0,3);
    const unresolvedPeople = await peopleArray.map(async (person) => {
      return fetch(person.homeworld)
             .then(data => data.json())
             .then(homeworld => {
                let { name, population } = homeworld;
                return ({...person, homeworld: name, population })
              })
    })
    return Promise.all(unresolvedPeople)
  }   

  cleanSpecies = async(peopleArray) => {
    const unresolvedPeople = await peopleArray.map(async (person) => {
      return fetch(person.species)
             .then(data => data.json())
             .then(species => {
                let {name} = species;
                return ({...person, 
                        species: name,
                        name: person.name,
                        homeworld: person.homeworld,
                        population: person.population
                        })
              })
    })
    return Promise.all(unresolvedPeople)
  }

  randomMovieNumber() {
    return Math.floor(Math.random() * 7 + 1)
  }

  romanize(num) {
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