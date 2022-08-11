import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { MoviesContextProvider } from "./context/movies-context";
import { BrowserRouter } from "react-router-dom";

/**
 *
 * Should leverage StrictMode of React to detect bad practices and side effects
 */
ReactDOM.render(
  <BrowserRouter>
    <MoviesContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </MoviesContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
