import React from 'react'
import './Navbar.css'

const Navbar = ({filterPeople}) => {
 return (
  <header className="App-header">
   <h1>Turing Yearbook</h1>
   <div className="button-wrapper">
    <button id="staff" className="staff button" onClick={filterPeople}>Staff</button>
    <button id="students" className="student button" onClick={filterPeople}>Students</button>
   </div>
  </header>
 )
}

export default Navbar