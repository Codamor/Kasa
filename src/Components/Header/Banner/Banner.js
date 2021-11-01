import React from "react";
import "./Banner.css" ;
import banner from "../../../assets/kasa_background.png"

class Banner extends React.Component{
    render() {
        return (
             <div className="banner">
                 <img src={banner}
                      title="Chez vous, partout et ailleurs"
                      alt="Location d'appartements entre particuliers en France."
                      />
             </div>
        );
    }
}

export default Banner ;