import React from "react";
import "./Tags.css" ;

class Tags extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className="tags__container">
                {
                    this.props.tags.map(
                        tag => <div className="tag__item">{tag}</div>
                    )
                }
            </div>
        )



    }
}

export default Tags ;