import React from 'react';
import '../App.css';
import { Display } from './Display';
import { ButtonPanel } from './ButtonPanel';

const App = () => {
  const calculate = '0';
  return (
    <>
      <Display calculations={calculate} />
      <ButtonPanel />
    </>
  );
};

export default App;
