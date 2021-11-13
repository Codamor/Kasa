import React from "react";
import "./Toggle.css" ;

class Toggle extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            visible: "false"
        }

        this.toggle = this.toggle.bind(this) ;

    }

    toggle(){
        if (this.state.visible === "true"){
            this.setState(
                {
                    visible: "false"
                }
            )
        } else {
            this.setState(
                {
                    visible: "true"
                }
            )
        }
    }

    render(){
        return(
            <div className="toggle">
                <div className="toggle__title" onClick={this.toggle}>
                    <h3>{this.props.title}</h3>
                </div>
                <div className="toggle__content" visible={this.state.visible}>
                    <p>{this.props.text}</p>
                </div>
            </div>


        )
    }
}

export default Toggle ;