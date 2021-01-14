import { React } from "react";
import PropTypes from "prop-types";

export const Button = (props) => {
  const { name, color, wide } = props;

  console.log(wide);
  return (
    <button
      type="button"
      style={{
        width: wide == false ? "25%" : "50%",
        backgroundColor: color,
      }}
      className="btn_component"
    >
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
};
