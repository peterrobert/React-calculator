import { React } from 'react';
import PropTypes from 'prop-types';

export const Display = props => {
  const { calculations,total,next } = props;

  return (
    <div className="display_component">
      <h1>{
      total || next !== null? total || next : calculations
      }</h1>
    </div>
  );
};

Display.defaultProps = {
  calculations: '0',
};

Display.propTypes = {
  calculations: PropTypes.string,
};
