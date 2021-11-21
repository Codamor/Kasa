import React from "react";
import "./Footer.scss" ;
import Logo from "../../Components/Logo/Logo";
import logoImage from "../../assets/img/logo-footer.png"



class Footer extends React.Component{
    render(){
        return(
            <footer className="footer">
                <Logo logo={logoImage} className={"footer__logo"}/>
                <h3 className="footer__title">© 2020 Kasa. All rights Reserved.</h3>
            </footer>
        )
    }
}

export default Footer