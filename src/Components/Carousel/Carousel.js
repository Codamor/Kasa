import React from "react";
import "./Carousel.css" ;

class Carousel extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className="carousel">

                <img className="carousel__picture" src={this.props.picture}/>

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