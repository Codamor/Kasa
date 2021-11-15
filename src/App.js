import React from "react";
import {BrowserRouter} from "react-router-dom" ;
import Header from "./Layouts/Header/Header";
import MainHome from "./Layouts/Main/MainHome";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <MainHome />
    </BrowserRouter>
  );
}

export default App;
