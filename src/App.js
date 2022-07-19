import logo from './logo.svg';
import './App.css';
import CardList from './components/CardList'
import React, {Component} from 'react';
import {robots} from './robots'

const App = () => {
    return (
     <CardList robots={robots}/>
    )
}

export default App;
