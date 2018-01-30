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

    switch (num) {
      case 1:
        return "I"
        break;
      case 2: 
        return "II"
        break;
      case 3:
        return "III"
        break;
      case 4: 
        return "IV"
        break;
      case 5: 
        return "V"
        break;
      case 6: 
        return "VI"
        break;
      case 7:
        return "VII"
        break;
      default:
        return "An episode"
    }
  }
}