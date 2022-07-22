import './App.css';
import Header from './components/Header'
import CardList from './components/CardList'
import Scroll from './components/Scroll'
import React, {useState, useEffect} from 'react';
import SearchBox from './components/SearchBox';
import ErrorBoundry from './components/ErrorBoundry';


function App()  {
  const [ robots, setRobots] = useState([])
  const [ searchfield, setSearchfield] = useState('')
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => setRobots(users));
  }, [])

  const onSearchChange = (event) => {
    setSearchfield(event.target.value)    
  }

  const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })

  return !robots.length ?
    <h1>Loading</h1> :
      (
      <div className='tc'>
        <Header />
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots}/>
          </ErrorBoundry>
        </Scroll>
      </div>
    )

}

export default App;
