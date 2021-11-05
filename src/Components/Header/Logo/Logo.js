import React from "react";
import "./Logo.css" ;
import logo from "../../../assets/img/logo.png"

class Logo extends React.Component{
    render(){
        return (
            <div className="logo">
                <img 
                    src={logo}
                    title="Kasa, leader de la location d'appartements entre particuliers"
                    alt="Kasa, leader de la location d'appartements entre particuliers"
                    />
                    
            </div>
        )
    }
}

export default Logo ;