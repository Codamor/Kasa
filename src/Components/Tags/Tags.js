import React from "react";
import "./Tags.scss" ;

class Tags extends React.Component{

    render(){

        let propsKey = 1 ;

        return (
            <div className="tags__container">
                {
                    this.props.tags.map(
                        tag => <div className="tags__item" key={propsKey +=1}>{tag}</div>
                    )
                }
            </div>
        )
    }
}

export default Tags ;