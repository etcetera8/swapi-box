import React from 'react';
import './ScrollContainer.css'

const ScrollContainer = ( {movieData} ) => {
  const {scrollText, episode, title, releaseDate} = movieData;
  
  return (
    <section className='ScrollContainer'>
      <h2>{title}</h2>
      <h3>Episode: {episode}</h3>
      <p>{scrollText}</p>
      <h3>{releaseDate}</h3>
    </section>
  )
}

export default ScrollContainer;