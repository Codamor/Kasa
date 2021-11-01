import React from "react";
import {Link} from "react-router-dom" ;
import "./Navigation.css" ;

class Navigation extends React.Component{
    render(){
        return (
            <nav className="navigation">
                <ul>
                    <li>
                        <link to="/">Home</link>
                    </li>
                    <li>
                        <link to="/about">A propos</link>
                    </li>
                </ul>
            </nav>
        )
    }

}

export default Navigation ;