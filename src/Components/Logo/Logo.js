import React from "react";
import {Link} from "react-router-dom";
import "./Logo.scss" ;

class Logo extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div className="logo">
                <Link to="/" title="Revenir à l'accueil de Kasa">
                    <img
                        src={this.props.logo}
                        title="Kasa, leader de la location d'appartements entre particuliers"
                        alt="Kasa, leader de la location d'appartements entre particuliers"
                    />
                </Link>
                    
            </div>
        )
    }
}

export default Logo ;