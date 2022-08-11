import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { MoviesContextProvider } from "./context/movies-context";
import App from "./App";

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
