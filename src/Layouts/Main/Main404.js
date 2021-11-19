import React from "react";
import "./Main404.scss" ;

class Main404 extends React.Component{
    render(){
        return(
            <main className="main">
                <h1 className="main__title">
                    404
                </h1>

                <h2 className="main__subtitle">
                    Oups !
                    La page que vous recherchez n'existe pas.
                </h2>
            </main>

        )
    }
}

export default Main404 ;