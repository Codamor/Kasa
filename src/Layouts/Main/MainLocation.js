import React from "react";
import "./MainLocation.css" ;
import Carousel from "../../Components/Carousel/Carousel";

class MainLocation extends React.Component{
    constructor(props) {
        super(props);
        this.locationId = this.props.match.params.id;
        this.state = {
            pictures: [],
            title: "",
            location: "",
            tags: [],
            hostName: "",
            hostPicture: "",
            rating: 0,
            description: "",
            equipments: []
        }
    }

    getLocationFromId(allLocations, locationId){
        for (let i = 0; i < allLocations.length; i++) {
            if (allLocations[i].id === this.locationId){
                this.setState(
                    {
                        pictures: allLocations[i].pictures,
                        title: allLocations[i].title,
                        location: allLocations[i].location,
                        tags: allLocations[i].tags,
                        hostName: allLocations[i].host.name,
                        hostPicture: allLocations[i].host.picture,
                        rating: allLocations[i].rating,
                        description: allLocations[i].description,
                        equipments: allLocations[i].equipments
                    }
                )
            }
        }
    }

    componentDidMount() {
        fetch("api.json")
            .then(response => {
                return response.json()
            })
            .then(result => {
                this.getLocationFromId(result, this.locationId)
            })
    }



    render() {

        return (
            <main className="main">
                <Carousel pictures={this.state.pictures} picturesTitle={this.state.title} />
            </main>
        );
    }

}

export default MainLocation