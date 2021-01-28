/* eslint-disable react/no-unused-state */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Display } from './Display';
import { ButtonPanel } from './ButtonPanel';
import { calculate } from '../logic/calculate';
import Navigation from './navigation';

class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operation: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    this.setState(prevState => calculate(prevState, buttonName));
  }

  render() {
    const { total, next } = this.state;
    return (
      <React.Fragment>
         <Navigation />
      <div className="app_component container">
  

        <Display total={total} next={next} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>

      </React.Fragment>
     
    );
  }
}

export default App;
