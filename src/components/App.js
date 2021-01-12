import React from 'react';
import '../App.css';
import { Display } from './Display';
import { ButtonPanel } from './ButtonPanel';

function App() {
  let calculate = "0"
  return (
    <>
      <Display calculations = {calculate} />
      <ButtonPanel />
    </>
  );
}

export default App;
