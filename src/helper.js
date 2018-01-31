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

  getPeople = (resource) => {
      fetch(`${this.root}${resource}`)
      .then( response => response.json())
      .then( json => { 
        const cleanedPeople = this.cleanPeople(json.results);
      })
      console.log(cleanedPeople)
  }

  cleanPeople(peopleArray) {
    peopleArray = peopleArray.splice(0,3);
    console.log(peopleArray);
    const unresolvedPeople = peopleArray.map(person => {
      return fetch(person.homeworld)
             .then(data => data.json())
             .then(homeworld => ({...person, homeworld}))
    })
    const personArray = Promise.all(unresolvedPeople)
    .then(result => console.log(result));
    
    console.log(unresolvedPeople);
    return personArray

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