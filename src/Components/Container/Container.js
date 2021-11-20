import React from "react";
import "./Container.scss";

class Container extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="container">
                <div className="container__left">
                    {
                        this.props.left
                    }
                </div>
                <div className="container__right">
                    {
                        this.props.right
                    }
                </div>
            </div>
        );
    }
}

export default Container ;