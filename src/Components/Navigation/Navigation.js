import React from "react";
import {Link} from "react-router-dom" ;
import "./Navigation.css" ;

class Navigation extends React.Component{
    render(){
        return (
            <nav className="navigation">
                <ul className="navigation__list">
                    <li className="navigation__item">
                        <Link to="home" className="navigation__link">Accueil</Link>
                    </li>
                    <li className="navigation__item">
                        <Link to="about" className="navigation__link">A propos</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Navigation ;