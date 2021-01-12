/* eslint-disable import/prefer-default-export, react/prop-types */
import { React } from "react";

export const Display = (props) => {
  const { calculations } = props;
  return <h1>{calculations}</h1>;
};
