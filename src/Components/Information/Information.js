import React from "react";
import "./Information.css" ;

class Information extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="information">
                <h1 className="information__title">
                    {this.props.title}
                </h1>
                <h2 className="information__subtitle">
                    {this.props.subtitle}
                </h2>
            </div>
        );
    }
}

export default Information ;