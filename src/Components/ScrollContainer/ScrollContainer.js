import React from 'react';
import PropTypes from 'prop-types';
import './ScrollContainer.css';

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

ScrollContainer.propTypes = {
  movieData: PropTypes.shape({
    scrollText: PropTypes.string,
    episode: PropTypes.string,
    title: PropTypes.string,
    releaseDate: PropTypes.string
  })
};

export default ScrollContainer;