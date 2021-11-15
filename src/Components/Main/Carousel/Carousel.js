import React from "react";
import "./Carousel.css" ;

class Carousel extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className="carousel">

                <img className="carousel__picture" src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"/>

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