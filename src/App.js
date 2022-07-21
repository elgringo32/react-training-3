import './App.css';
import Header from './components/Header'
import CardList from './components/CardList'
import Scroll from './components/Scroll'
import React, {Component} from 'react';
import SearchBox from './components/SearchBox';


class App extends Component  {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
    console.log('constructor')
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then( users => this.setState({ robots: users}));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
   
    
  }

  render() {
    const filteredRobots = this.state.robots.filter((robots) => {
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    console.log('render')

    return (
      <div className='tc'>
        <Header />
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
        <CardList robots={filteredRobots}/>
        </Scroll>
        
      </div>
    )
  }
   
}

export default App;
