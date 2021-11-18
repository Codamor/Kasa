import React from "react";
import "./Gallery.css" ;
import Card from "../Card/Card";

class Gallery extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            locations: []
        }
    }

    componentDidMount() {
        fetch("/api.json")
            .then(response => response.json())
            .then(result => {
                this.setState(
                    {
                        locations: result
                    }
                )
            })

    }

    render() {
        return (

             <div className="gallery">
                 {
                     this.state.locations.map(
                         (location) => {
                             return (
                                 <Card
                                     picture={location.cover}
                                     alt={location.title}
                                     title={location.title}
                                     cardTitle={location.title}
                                 />
                             )
                         }
                     )
                 }
             </div>
        );
    }
}

export default Gallery ;