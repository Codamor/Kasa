import React from "react";
import "./Header.css" ;
import Logo from "./Logo/Logo" ;
import Navigation from "./Navigation/Navigation";

class Header extends React.Component{
    render() {
        return (
             <header className="header">
                 <Logo />
                 <Navigation />
             </header>
        );
    }
}

export default Header ;