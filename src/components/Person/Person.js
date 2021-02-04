import React from 'react';
import './Person.css';

const Person = ({ id, name, quote, superlative, image}) => {
 return (
  <article className="person" id={id}>
   <img className="person-img" src={image} alt={`${name} yearbook`} />
   <h2 className="person-name">{name}</h2>
   <div className="info-wrapper">
    <p className="person-quote">"{quote}"</p>
    <p className="person-super">{superlative}</p>
   </div>
  </article>
 )
}

export default Person;
