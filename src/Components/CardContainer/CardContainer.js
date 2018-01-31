import React from 'react';
import Card from '../Card/Card'
import './CardContainer.css';

const CardContainer = () => {
  return (
    <section className='CardContainer'> 
      <Card />
      <Card />
      <Card />
    </section>
  )
}

export default CardContainer;