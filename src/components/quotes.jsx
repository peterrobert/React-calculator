/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/button-has-type */
import React, { Component } from 'react';
import Quote from './quote';

class Quotes extends Component {
  constructor() {
    super();
    this.state = {
      quotes: [],
      randomQuotes: [],
    };
  }

  componentDidMount() {
    fetch('https://type.fit/api/quotes')
      .then(Response => Response.json())
      .then(data => {
        this.setState({ quotes: data });
      });
  }

  handleClick = () => {
    // eslint-disable-next-line react/destructuring-assignment
    const { length } = this.state.quotes;
    const random = Math.floor(Math.random() * length);
    // eslint-disable-next-line consistent-return
    function filterFunc(data, index) {
      if (index === random) {
        return data;
      }
    }
    // eslint-disable-next-line react/destructuring-assignment
    const filtered = this.state.quotes.filter(filterFunc);
    this.setState({ randomQuotes: filtered });
  };

  render() {
    const [arr] = this.state.randomQuotes;
    return (
      <div className="app_component container">
        // eslint-disable-next-line react/destructuring-assignment
        // eslint-disable-next-line react/destructuring-assignment
        {this.state.randomQuotes.length > 0 ? (
          <Quote name={arr.author} message={arr.text} />
        ) : (
          <Quote name=" none" message="no quote at the moment" />
        )}

        <button
          onClick={this.handleClick}
          className="btn btn-secondary m-2 btn-sm get-quote"
        >
          get Quotes
        </button>
      </div>
    );
  }
}

export default Quotes;
