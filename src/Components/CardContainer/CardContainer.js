import React from 'react';
import Card from '../Card/Card'
import './CardContainer.css';

const CardContainer = () => {
  return (
    <section className='CardContainer'> 
      <h1>im a card container</h1>
      <Card />
    </section>
  )
}

export default CardContainer;