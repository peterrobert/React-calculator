import React from 'react';
import '../App.css';
import { Display } from './Display';
import { ButtonPanel } from './ButtonPanel';
import { calculate } from '../logic/calculate';

class App extends React.Component{
  constructor(props){
    super(props);

   this.state = {
      total: null,
      next: null,
      operation: null
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName){
   
    this.setState(prevState => calculate(prevState, buttonName));

  }


  render(){
    return(
      <div className="app_component">
      <Display total ={this.state.total} next = {this.state.next}/>
      <ButtonPanel clickHandler= {this.handleClick}/>
    </div>
    )
  }

}

export default App;