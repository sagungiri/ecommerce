import React, {Component} from 'react';
import './App.css';
import HomePage from './components/homepage/homepage.component';
import {Route, Switch} from 'react-router-dom'; 
class App extends Component {
  render(){
    return(
      <div>
      < HomePage> </HomePage>
      </div>
      
    );
  }
}
export default App;
