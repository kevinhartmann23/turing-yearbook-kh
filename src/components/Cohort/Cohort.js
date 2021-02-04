import React from 'react';
import Person from '../Person/Person';
import './Cohort.css';

const Cohort = ({people, title}) => {
 const personProfile = people.map(person => {
  return (
   <Person 
    id={person.id}
    key={person.id}
    name={person.name}
    quote={person.quote}
    superlative={person.superlative}
    image={person.photo}
    />
  )
 })
 
 return (
  <div>
   <h1 className="load-prompt">{title}</h1>
   <div className="cohort-container">
    {personProfile}
   </div>
  </div>
 )
}

export default Cohort;
