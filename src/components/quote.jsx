/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';
import { React } from 'react';

function Quote(props) {
  const { name } = props;
  const { message } = props;
  return (
    <div className="card">
      <div className="card-header">Quote</div>
      <div className="card-body">
        <blockquote className="blockquote mb-0">
          <p>
            {message}
          </p>
          <footer className="blockquote-footer">
            Author:
            <cite title="Source Title">
              {name}
            </cite>
          </footer>
        </blockquote>
      </div>
    </div>
  );
}

Quote.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  message: PropTypes.any,
  // eslint-disable-next-line react/forbid-prop-types
  name: PropTypes.any,
};
export default Quote;
