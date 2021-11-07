import React from "react";
import "./Ratings.css" ;
import star_red from "../../../assets/img/star_grey.png" ;
import star_grey from "../../../assets/img/star_red.png" ;

class Ratings extends React.Component{
    constructor(props) {
        super(props);
    }

    generate(){
        const allStars = [] ;
        const greyStarsToGenerate = 5 - this.props.ratings

        for (let i = 0; i < this.props.ratings; i++) {
            allStars.push(<img className="star" src={star_red}/>)
        }

        for (let i = 0; i < greyStarsToGenerate; i++) {
            allStars.push(<img className="star" src={star_grey}/>)
        }

        return allStars ;
    }

    render(){

        return (
            <div className="rating">
                {this.generate()}
            </div>
        )
    }
}

export default Ratings ;