import React from "react";
import "./MainAbout.css" ;
import Banner from "../../Components/Banner/Banner";
import Toggle from "../../Components/Toggle/Toggle";

import aboutBackground from "../../assets/img/about_bg.png"


class MainAbout extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){

        return(
            <main className="main">
                <Banner
                    picture={aboutBackground}
                    alt={"Les valeurs fondatrices de Kasa."}
                    title={"Les valeurs fondatrices de Kasa."}
                />

                <Toggle />
                <Toggle />
                <Toggle />
                <Toggle />
            </main>
        )
    }
}

export default MainAbout ;