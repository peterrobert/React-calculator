import React, { Component } from "react";
import Quote from "./quote";

class Quotes extends Component {
  state = {
    quotes: [],
    randomQuotes:[],
  };

  componentDidMount() {
    fetch("https://type.fit/api/quotes")
      .then((Response) => Response.json())
      .then((data) => {
          this.setState({quotes: data})
      })  
  }

  handleClick = () => {
        let random = Math.floor(Math.random() * this.state.quotes.length);
        function filterFunc(data, index) {
          if (index === random) {
            return data;
          }
        }
        let filtered = this.state.quotes.filter(filterFunc);
        this.setState({ randomQuotes: filtered });
  };

  render() {
      
    let [arr] = this.state.randomQuotes;
    return (
      <div className="app_component container">
        {this.state.randomQuotes.length > 0 ? (
          <Quote name={arr.author} message={arr.text} />
        ) : (
          <Quote name={" none"} message={"no quote at the moment"} />
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
