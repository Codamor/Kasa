import React from "react";
import "./Main.scss" ;
import Banner from "../../Components/Banner/Banner";
import homeBackground from "../../assets/img/home_bg.png"
import Gallery from "../../Components/Gallery/Gallery";

class MainHome extends React.Component{
    constructor(props){
        super(props)
        this.state={
            locations: []
        }
    }

    componentDidMount() {
        fetch("api.json"
            , {
                headers : {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            .then(response => response.json())
            .then(result => {
                this.setState(
                    {
                        locations: result
                    }
                )
            })

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

                <Gallery locations={this.state.locations}/>

            </main>
        )
    }
}

export default MainHome ;