import React from "react";
import "./Header.scss" ;
import Logo from "../../Components/Logo/Logo" ;
import Navigation from "../../Components/Navigation/Navigation";
import logoImage from "../../assets/img/logo.png"

class Header extends React.Component{
    render() {
        return (
             <header className="header">
                 <Logo logo={logoImage} />
                 <Navigation />
             </header>
        );
    }
}

export default Header ;