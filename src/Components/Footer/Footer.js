import React from "react";
import "./Footer.css" ;

import Logo from "../../Header/Logo/Logo.js" ;

class Footer extends React.Component{
    render(){
        (
            <footer className="footer">
                <Logo />
                <h3>© 2020 Kasa. All rights Reserved.</h3>
            </footer>
        )
    }
}