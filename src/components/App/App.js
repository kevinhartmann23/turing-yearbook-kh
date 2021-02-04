import React, { Component } from 'react';
import Cohort from '../Cohort/Cohort';
import Navbar from '../Navbar/Navbar';
import people from '../../data/yearbook-data.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      staff: people.staff,
      students: people.students,
      display: [],
      title: ''
    }
  }

  filterPeople = (event) => {
    const title = event.target.id
    this.setState( {title: [title.charAt(0).toUpperCase() + title.slice(1)]})
    this.setState( {display: this.state[title] })
  } 

  render() {
    return (
      <div className="App">
        <Navbar filterPeople={this.filterPeople}/>
        {!this.state.display.length && <h1 className="load-prompt">Please select "staff" or "student" to view a yearbook...</h1>}
        <Cohort people={this.state.display} title={this.state.title}/>
      </div>
    );
  }
}

export default App;
