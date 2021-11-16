import React from "react";
import "./MainAbout.css" ;
import Banner from "../../Components/Banner/Banner";
import Toggle from "../../Components/Toggle/Toggle";


class MainAbout extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){

        return(
            <main className="main">
                <Banner />
                <Toggle />
                <Toggle />
                <Toggle />
                <Toggle />
            </main>
        )
    }
}

export default MainAbout ;