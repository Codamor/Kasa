import React from "react";
import "./MainLocation.css" ;

class MainLocation extends React.Component{
    constructor(props) {
        super(props);
        this.locationID = this.props.match.params.id;
    }

    render() {
        return (
            <div>
                {this.locationID}

            </div>
        );
    }

}

export default MainLocation