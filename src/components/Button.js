import { React } from 'react';
import PropTypes from 'prop-types';

export const Button = props => {
  const { name, color, wide } = props;

  return (
    <button
      type="button"
      style={{
        width: wide === false ? '25%' : '50%',
        backgroundColor: color,
      }}
      className="btn_component"
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
  color: PropTypes.string,
  wide: PropTypes.bool,
};
