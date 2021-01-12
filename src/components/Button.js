/* eslint-disable import/prefer-default-export, react/prop-types */
import { React } from 'react';

export const Button = props => {
  const { name } = props;
  return <button type="button">{name}</button>;
};
