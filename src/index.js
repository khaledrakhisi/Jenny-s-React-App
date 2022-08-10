import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { MoviesContextProvider } from "./context/movies-context";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <MoviesContextProvider>
      <App />
    </MoviesContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
