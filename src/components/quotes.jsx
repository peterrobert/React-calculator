import React, { Component } from 'react';

class Quotes extends Component {

    state = { 

        quotes:[],

     }

     componentDidMount() {

        fetch('https://type.fit/api/quotes')
        .then(Response => Response.json())
        .then((data) => {
            this.setState({quotes: data})
        })

     }

     handleClick = () => {
        const {quotes} = this.state
        let random = Math.floor((Math.random() * quotes.length));
        function filterFunc(data, index) {
            if (index === random){
                return data
           }
        } 
      let filtered =  quotes.filter(filterFunc);    
     }

    render() { 
        console.log(this.state.quotes)
        return ( 
            <div className="app_component container">
             <button  onClick = {this.handleClick} className ="btn btn-secondary m-2 btn-sm get-quote">get Quotes</button>
            </div>
         );
    }
}
 
export default Quotes;