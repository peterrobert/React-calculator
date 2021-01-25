/* eslint-disable import/prefer-default-export */
import { React } from 'react';
import PropTypes from 'prop-types';

export const Display = props => {
  const { calculations } = props;

  return (
    <div className="display_component">
      <h1>{calculations}</h1>
    </div>
  );
};

Display.defaultProps = {
  calculations: '0',
};

Display.propTypes = {
  calculations: PropTypes.string,
};
