import React from "react";
import "./Ratings.scss" ;
import star_red from "../../assets/img/star_grey.png" ;
import star_grey from "../../assets/img/star_red.png" ;

class Ratings extends React.Component{

    generate(){
        const allStars = [] ;
        const greyStarsToGenerate = 5 - this.props.ratings ;
        const redStarsTGenerate = this.props.ratings ;
        let propsKey = 0;

        for (let i = 0; i < redStarsTGenerate; i++) {
            allStars.push(<img className="star" src={star_red} alt="note positive" key={propsKey += 1}/> )
        }

        for (let i = 0; i < greyStarsToGenerate; i++) {
            allStars.push(<img className="star" src={star_grey} alt="note neutre" key={propsKey += 1}/>)
        }

        return allStars ;
    }

    render(){

        return (
            <div className="rating">
                {
                    this.generate()
                }
            </div>
        )
    }
}

export default Ratings ;