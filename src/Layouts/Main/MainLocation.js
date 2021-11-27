import React from "react";
import Carousel from "../../Components/Carousel/Carousel";
import Information from "../../Components/Information/Information";
import Tags from "../../Components/Tags/Tags";
import Host from "../../Components/Host/Host";
import Toggle from "../../Components/Toggle/Toggle";
import Ratings from "../../Components/Ratings/Ratings";
import List from "../../Components/List/List";
import Container from "../../Components/Container/Container";

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

    redirectTo404(){
        this.props.history.replace("/404") ;
    }

    getLocation(allLocations, locationID){
        let locationFounded = false ;

        for (let i = 0; i < allLocations.length; i++) {
            if (allLocations[i].id === locationID){
                locationFounded = true ;

               let location = {
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
                this.setState(location) ;
            }
        }

        if (locationFounded === false){
            this.redirectTo404()
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
            .then(response => {
                return response.json()
            })
            .then(result => {
                this.getLocation(result, this.locationId)
            })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        let previousIdFromURL = prevProps.match.params.id ;
        let actualIdFromURL = this.props.match.params.id ;

       if(previousIdFromURL !== actualIdFromURL ){
           fetch("api.json"
               , {
                   headers : {
                       'Content-Type': 'application/json',
                       'Accept': 'application/json'
                   }

               })
               .then(response => {
                   return response.json()
               })
               .then(result => {
                   this.getLocation(result, actualIdFromURL)
               })
       }

    }

    render() {

        return (

            <main className="main">
                <Carousel pictures={this.state.pictures} picturesTitle={this.state.title} />

                <Container
                    left={
                        <React.Fragment>
                            <Information title={this.state.title} location={this.state.location} />
                            <Tags tags={this.state.tags}/>
                        </React.Fragment>

                    }
                    right={
                        <React.Fragment>
                            <Host name={this.state.hostName} src={this.state.hostPicture} />
                            <Ratings ratings={this.state.rating} />
                        </React.Fragment>

                    }
                />

                <Container
                    left={
                        <Toggle title={"Description"}>
                            <p>
                                {this.state.description}
                            </p>
                        </Toggle>
                    }

                    right={
                        <Toggle title={"Equipements"} >
                            <List list={this.state.equipments}/>
                        </Toggle>
                    }
                />

            </main>
        );
    }

}

export default MainLocation