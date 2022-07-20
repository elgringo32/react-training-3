import './App.css';
import Header from './components/Header'
import CardList from './components/CardList'
import React, {Component} from 'react';
import {robots} from './robots'
import SearchBox from './components/SearchBox';


class App extends Component  {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    this.setState({ robots: robots})
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
   
    
  }

  render() {
    const filteredRobots = this.state.robots.filter((robots) => {
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    return (
      <div className='tc'>
        <Header />
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList robots={filteredRobots}/>
      </div>
    )
  }
   
}

export default App;
