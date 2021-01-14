import { React } from "react";
import PropTypes from "prop-types";

export const Button = (props) => {
  const { name } = props;
  const allButtons = {
    width : '25%'
  }

  const zeroButton = {
    width: '50%'
  }
  return (
    <button type="button" style = { name == '0'? zeroButton: allButtons } className="btn_component">
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
};
