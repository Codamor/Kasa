import React from "react";
import "./Header.css" ;
import Logo from "../../Components/Logo/Logo" ;
import Navigation from "../../Components/Navigation/Navigation";

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