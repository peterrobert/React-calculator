import { React } from 'react';
import PropTypes from 'prop-types';

export const Display = props => {
  const { calculations } = props;
  return <h1>{calculations}</h1>;
};

Display.propTypes = {
  calculations: PropTypes.string.isRequired,
};
