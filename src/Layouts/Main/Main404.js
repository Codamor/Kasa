import React from "react";
import "./Main.scss" ;

class Main404 extends React.Component{

    render(){

        return(
            <main className="main main--404">
                <h1 className="main--404__title">
                    404
                </h1>

                <h2 className="main--404__subtitle">
                    Oups !
                    La page que vous recherchez n'existe pas.
                </h2>
            </main>

        )
    }
}

export default Main404 ;