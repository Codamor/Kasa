import React from "react";
import {BrowserRouter} from "react-router-dom" ;
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main />
    </BrowserRouter>
  );
}

export default App;
