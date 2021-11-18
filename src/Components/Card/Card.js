import React from "react";
import "./Card.css"

class Card extends React.Component{
    constructor(props) {
        super(props)
    }

    render(){
        return(
            <div className="card">
                <img
                    className="card__picture"
                    src={this.props.picture}
                    alt={this.props.alt}
                    title={this.props.title}
                />

                <h2 className="card__title">{this.props.cardTitle}</h2>
            </div>
        )
    }
}

export default Card ;