import React from "react";
import {HashRouter, Switch, Route} from "react-router-dom" ;

import Header from "./Layouts/Header/Header";
import Footer from "./Layouts/Footer/Footer";
import MainAbout from "./Layouts/Main/MainAbout";
import MainHome from "./Layouts/Main/MainHome";
import MainLocation from "./Layouts/Main/MainLocation";
import Main404 from "./Layouts/Main/Main404";

class App extends React.Component {

    render(){
        return (
            <HashRouter>
                <Header />
                <Switch>
                    <Route exact path="/" component={MainHome} />
                    <Route path="/about" component={MainAbout} />
                    <Route path="/locations/:id" component={MainLocation}/>
                    <Route path="*" component={Main404} />
                </Switch>
                <Footer />
            </HashRouter>
        )
    }
}

export default App;
