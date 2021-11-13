import React from "react";
import "./Toggle.css" ;

class Toggle extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="toggle">
                <div className="toggle__title">
                    <h3>{this.props.title}</h3>
                </div>
                <div className="toggle__content">
                    <p>{this.props.text}</p>
                </div>
            </div>
        )
    }
}

export default Toggle ;