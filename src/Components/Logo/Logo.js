import React from "react";
import "./Logo.css" ;

class Logo extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div className="logo">
                <img 
                    src={this.props.logo}
                    title="Kasa, leader de la location d'appartements entre particuliers"
                    alt="Kasa, leader de la location d'appartements entre particuliers"
                    />
                    
            </div>
        )
    }
}

export default Logo ;