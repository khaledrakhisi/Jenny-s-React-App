import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";

/**
 *
 * React components should be stored in seperate folder called 'components'
 */

/**
 * DRY or Don't Repeat Yourself
 * These two components render a same html so they should be definded as one
 *
 */

/**
 *
 * This is not a best practice to define home page HTML code inside the Main App file.
 * It should be defined in seperate file. e.g: HomePage.jsx or MainPage.jsx or in this case MoviesPAge.jsx
 *
 */

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
