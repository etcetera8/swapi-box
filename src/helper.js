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

  getPeople = async(resource) => {
    const peopleArray =  await fetch(`${this.root}${resource}`)
      .then( response => response.json())
      // .then( json => console.log(this.cleanPeople(json.results)))
      // .then( people => console.log(people))
    console.log(peopleArray.results)
    const cleaned = await this.cleanPeople(peopleArray.results)
    console.log(cleaned);
    //return ()
  }

  cleanPeople = async(peopleArray) => {
    peopleArray = peopleArray.splice(0,3);
    const unresolvedPeople = peopleArray.map(async (person) => {
      return fetch(person.homeworld)
             .then(data => data.json())
             .then(homeworld => ({...person, homeworld}))
    })
    return Promise.all(unresolvedPeople)
    .then(results => results)
  }   

    // const cleanedPeople = peopleArray.map( person => {
    //   fetch(person.homeworld)
    //   .then(response => response.json())
    //   .then(homeworldData => { 
    //     return {
    //       name: person.name,
    //       homeworld: homeworldData.name,
    //       species: person.species,
    //       population: homeworldData.population, 
    //       favorite: false
    //     }
    //   })

    //})
 


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