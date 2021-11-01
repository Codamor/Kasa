import React from "react";
import "./Header.css" ;
import Logo from "./Logo/Logo" ;
import Navigation from "./Navigation/Navigation";
import Banner from "./Banner/Banner" ;

class Header extends React.Component{
    render() {
        return (
             <header className="header">
                 <Logo />
                 <Navigation />
                 <Banner />
             </header>
        );
    }
}

export default Header ;