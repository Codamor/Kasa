import React from "react";
import "./Card.scss"
import {Link} from "react-router-dom";

class Card extends React.Component{
    constructor(props) {
        super(props)
    }

    render(){
        return(
            <Link to={this.props.url} className="card" title={this.props.title}>
                <img
                    className="card__picture"
                    src={this.props.picture}
                    alt={this.props.alt}
                    title={this.props.title}
                />

                <h2 className="card__title">{this.props.cardTitle}</h2>
            </Link>
        )
    }
}

export default Card ;