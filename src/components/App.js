import React from 'react';
import '../App.css';
import { Display } from './Display';
import { ButtonPanel } from './ButtonPanel';
import { calculate } from '../logic/calculate';

class App extends React.Component{
  constructor(){
    super();

    let state = {
      total: null,
      next: null,
      operation: null
    };
  }

  


  render(){
    return(
      <div className="app_component">
      <Display />
      <ButtonPanel />
    </div>
    )
  }

}

export default App;