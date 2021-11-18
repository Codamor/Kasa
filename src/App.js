import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom" ;

import Header from "./Layouts/Header/Header";
import Footer from "./Layouts/Footer/Footer";
import MainAbout from "./Layouts/Main/MainAbout";
import MainHome from "./Layouts/Main/MainHome";

function App() {
  return (
      <BrowserRouter>
          <Header />
            <Switch>
                <Route exact path="/" component={MainHome} />
                <Route path={"/about"} component={MainAbout} />
            </Switch>
          <Footer />
      </BrowserRouter>

  );
}

export default App;
