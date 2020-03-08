import React from "react";
import "./App.css";
import Routers from "./components/Routers";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Store";
import NavBar from "./components/NavBar/NavBar";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <Routers />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
