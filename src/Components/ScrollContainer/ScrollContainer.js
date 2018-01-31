import React from 'react';
import './ScrollContainer.css'

const ScrollContainer = ( {movieData} ) => {
  const {scrollText, episode, title, releaseDate} = movieData;
  
  return (
    <section className='ScrollContainer'>
      <div className="crawl">
        <h1 className="swapi-title">SWAPI-BOX </h1>
        <br />
        <p>{scrollText}</p>
        <h3>{releaseDate}</h3>
        <h2>{title}</h2>
        <h3>Episode: {episode}</h3>
      </div>
    </section>
  )
}

export default ScrollContainer;