import { React } from 'react';
import PropTypes from 'prop-types';

export const Button = props => {
  const { name } = props;
  return <button type="button" className="btn_component">{name}</button>;
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
};
