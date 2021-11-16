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

                <img src={this.props.picture} alt={this.props.alt} title={this.props.title}/>

                <h2 className="banner__title">
                    {this.props.h2Title}
                </h2>
            </div>
        );
    }
}

export default Banner ;