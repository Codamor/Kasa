import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom" ;

import Header from "./Layouts/Header/Header";
import Footer from "./Layouts/Footer/Footer";
import MainAbout from "./Layouts/Main/MainAbout";
import MainHome from "./Layouts/Main/MainHome";
import Main404 from "./Layouts/Main/Main404";

function App() {
  return (
      <BrowserRouter>
          <Header />
            <Switch>
                <Route exact path="/" component={MainHome} />
                <Route path="/about" component={MainAbout} />
                <Route path="*" component={Main404} />
            </Switch>
          <Footer />
      </BrowserRouter>

  );
}

export default App;
