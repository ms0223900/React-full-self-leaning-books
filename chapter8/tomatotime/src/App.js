import React,{ Component } from 'react';
// import Navbar from './components/Navbar';
import Timer from './components/Timer';
import TTimer from './components/TTimer';
import './App.css';

export default class App extends Component {
  render(){
    return (
      <Timer workingTime={25} restingTime={5}/>
      
    )
  }
}
