import React from "react";
import "./Tags.css" ;

class Tag extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className="tag">
                {this.props.text}
            </div>
        )
    }
}

export default Tag ;