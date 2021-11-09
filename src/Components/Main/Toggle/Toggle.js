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
                    {this.props.title}
                </div>
                <div className="toggle__text">
                    {this.props.text}
                </div>
            </div>
        )
    }
}

export default Toggle ;