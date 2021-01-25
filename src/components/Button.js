/* eslint-disable import/prefer-default-export */
import { React } from 'react';
import PropTypes from 'prop-types';

export const Button = props => {
  const { name, color, wide } = props;

  const handleClick = buttonName => props.clickHandler(buttonName);

  return (
    <button
      type="button"
      style={{
        width: wide === false ? '25%' : '50%',
        backgroundColor: color,
      }}
      className="btn_component"
      onClick={() => { handleClick(name); }}
    >
      {name}
    </button>
  );
};

Button.defaultProps = {
  wide: false,
  color: '',
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  wide: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};
