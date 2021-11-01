import React from "react";
import {Link} from "react-router-dom" ;
import "./Navigation.css" ;

class Navigation extends React.Component{
    render(){
        return (
            <nav className="navigation">
                <ul className="navigation__list">
                    <li className="navigation__item">
                        Accueil
                    </li>
                    <li className="navigation__item">
                        A propos
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Navigation ;