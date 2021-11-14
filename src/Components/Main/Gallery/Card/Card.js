import React from "react";
import "./Card.css"

class Card extends React.Component{
    constructor(props) {
        super(props)
    }

    render(){
        return(
            <div className="card">
                <img src={this.props.image} alt={this.props.title} />
                <h2 className="card__title">{this.props.title}</h2>
            </div>
        )
    }
}

export default Card ;