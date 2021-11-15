import React from "react";
import "./Toggle.css" ;

class Toggle extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            visible: false
        }

        this.toggle = this.toggle.bind(this) ;

    }

    toggle(){
        this.setState({
            visible: !this.state.visible
        })

    }

    render(){
        return(
            <div className="toggle">
                <div
                    className={`
                        toggle__title
                        ${this.state.visible ? "toggle__title--onClick" : ""}
                    `}
                          onClick={this.toggle}>
                    <h3>{this.props.title}</h3>
                </div>
                    {
                        this.state.visible === true && <div className="toggle__content" >
                                                            <p>{this.props.text}</p>
                                                        </div>
                    }
            </div>


        )
    }
}

//TODO add fontawesome icon to title bar

export default Toggle ;