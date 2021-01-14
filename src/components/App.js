import React from 'react';
import '../App.css';
import { Display } from './Display';
import { ButtonPanel } from './ButtonPanel';

const App = () => (
  <div className="app_component">
    <Display />
    <ButtonPanel />
  </div>
);

export default App;
