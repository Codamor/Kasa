import React from "react";
import "./Carousel.css" ;

class Carousel extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0
        }
    }

    render(){

        return (
            <div className="carousel">

                {
                    this.props.pictures.map(
                        (picture, index) => <img
                                        className="carousel__picture"
                                        src={picture}
                                        visible={index === this.state.currentIndex ? "true" : ""}
                                        alt={this.props.picturesTitle}
                                        title={this.props.picturesTitle}
                                        key={picture}
                                    />
                    )
                }

                <div className="carousel__nav">
                    <div className="carousel__nav-previous">
                    </div>
                    <div className="carousel__nav-next">
                    </div>
                </div>

            </div>
        )
    }
}

export default Carousel ;