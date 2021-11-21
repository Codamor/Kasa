import React from "react";
import "./Banner.scss" ;

class Banner extends React.Component{
    render() {
        return (
            <div className="banner">
                <div className="banner__overlay">
                </div>

                <img src={this.props.picture} alt={this.props.alt} title={this.props.title}/>

                <h2 className="banner__title">
                    {this.props.bannerTitle}
                </h2>
            </div>
        );
    }
}

export default Banner ;