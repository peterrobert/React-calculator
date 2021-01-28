import { React } from "react"
function Quote(props) {
    return(
        <div className="card">
        <div className="card-header">Quote</div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>
              {props.message}
            </p>
            <footer className="blockquote-footer">
              Author:   
              <cite title="Source Title">
               {props.name}
              </cite>
            </footer>
          </blockquote>
        </div>
      </div>
    )
}
export default Quote;