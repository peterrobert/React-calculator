import { React } from 'react';
import { Button } from './Button';
import {
  Group1, Group2, Group3, Group4, Group5,
} from '../buttonsArray';

export const ButtonPanel = (props) => {
 
  const handleClick = (buttonName) => {
    return props.clickHandler(buttonName)
  }

  const displayButtons = data => {
    const check = data.name;
    let setColor;
    if (
      check === '÷'
      || check === 'X'
      || check === '-'
      || check === '+'
      || check === '='
    ) {
      setColor = '#f45d0f';
    }
    return (
      <Button
        key={data.id}
        name={data.name}
        color={setColor}
        wide={data.name === '0'}
        clickHandler = {handleClick}
      />
    );
  };

  const groupOneButtons = Group1.map(displayButtons);
  const groupTwoButtons = Group2.map(displayButtons);
  const groupThreeButtons = Group3.map(displayButtons);
  const groupFourButtons = Group4.map(displayButtons);
  const groupFiveButtons = Group5.map(displayButtons);

  return (
    <div className="button_panel">
      <div>{groupOneButtons}</div>
      <div>{groupTwoButtons}</div>
      <div>{groupThreeButtons}</div>
      <div>{groupFourButtons}</div>
      <div>{groupFiveButtons}</div>
    </div>
  );
};
