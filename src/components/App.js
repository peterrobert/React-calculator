import React from 'react';
import '../App.css';
import { Display } from './Display';
import { ButtonPanel } from './ButtonPanel';
import { calculate } from "../logic/calculate";

const App = () => (
  <div className="app_component">
    <Display />
    <ButtonPanel />
  </div>
);

export default App;
