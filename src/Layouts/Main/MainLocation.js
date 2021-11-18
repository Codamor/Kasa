import React from "react";
import "./MainLocation.css" ;
import Carousel from "../../Components/Carousel/Carousel";

class MainLocation extends React.Component{
    constructor(props) {
        super(props);
        this.locationId = this.props.match.params.id;
        this.state = {
            allLocations: []
        }
    }

    componentDidMount() {
        fetch("api.json")
            .then(response => {
                return response.json()
            })
            .then(result => {
                this.setState(
                    {
                        allLocations: result
                    }
                )
            })
    }

    render() {

        return (
            <main className="main">



            </main>
        );
    }

}

export default MainLocation