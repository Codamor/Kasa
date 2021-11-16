import React from "react";
import {BrowserRouter} from "react-router-dom" ;
import Header from "./Layouts/Header/Header";
import MainAbout from "./Layouts/Main/MainAbout";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <MainAbout />
    </BrowserRouter>
  );
}

export default App;
