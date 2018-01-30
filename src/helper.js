export default class SwapiCleaner {
  constructor(responseData) {
    this.responseData = responseData;
  }



  randomMovieCall(movieArray) {
    const romanId = this.romanize(movieArray.episode_id);

    return {scrollText: movieArray.opening_crawl,
            title: movieArray.title,
            releaseDate: movieArray.release_date,
            episode: romanId};
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