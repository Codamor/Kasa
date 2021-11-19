import React from "react";
import "./Gallery.scss" ;
import Card from "../Card/Card";

class Gallery extends React.Component{
    constructor(props) {
        super(props);
    }


    render() {
        return (

             <div className="gallery">
                 {
                     this.props.locations.map(
                         (location) => {
                             return (
                                 <Card
                                     picture={location.cover}
                                     alt={location.title}
                                     title={location.title}
                                     cardTitle={location.title}
                                     key={location.id}
                                     url={location.id}
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