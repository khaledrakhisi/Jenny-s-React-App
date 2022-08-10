import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { MoviesContextProvider } from "./context/movies-context";

ReactDOM.render(
  <MoviesContextProvider>
    <App />
  </MoviesContextProvider>,
  document.getElementById("root")
);
