import React from "react";
import "./Host.scss";

class Host extends React.Component{

    render(){
        return(
            <div className="host">
                <div className="host__name">
                    {this.props.name}
                </div>
                <div className="host__picture">
                    <img src={this.props.src} alt={this.props.alt} title={this.props.title}/>
                </div>
            </div>
        )
    }
}

export default Host ;