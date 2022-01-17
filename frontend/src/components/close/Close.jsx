import React, { Component } from 'react'
import sidebar from "../../images/sidebar/sidebar.svg";
export class Close extends Component {
    render(props) {
        return (
            <div>
          <img src={sidebar} alt="icon" width="40" onClick={props.click}/>
            </div>
        )
    }
}

export default Close
