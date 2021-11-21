import React from "react";
import "./List.scss" ;

class List extends React.Component{

    render(){
        return (
            <ul>
                {
                    this.props.list.map(
                        element => <li>{element}</li>
                    )
                }
            </ul>
        )
    }
}

export default List ;