import React from "react";
import "./MainHome.css" ;
import Banner from "../../Components/Banner/Banner";
import homeBackground from "../../assets/img/home_bg.png"
import Gallery from "../../Components/Gallery/Gallery";

class MainHome extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <main className="main">
                <Banner
                    bannerTitle={"Chez vous, partout et ailleurs"}
                    picture={homeBackground}
                    title={"Chez vous, partout et ailleurs"}
                    alt={"Chez vous, partout et ailleurs"}
                />

                <Gallery />

            </main>
        )
    }
}

export default MainHome ;