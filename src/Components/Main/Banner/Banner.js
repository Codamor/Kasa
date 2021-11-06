import React from "react";
import "./Banner.css" ;

class Banner extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="banner">
                <div className="banner__overlay">
                </div>
                <h2 className="banner__title">
                    Chez vous, partout et ailleurs
                </h2>
            </div>
        );
    }
}

export default Banner ;