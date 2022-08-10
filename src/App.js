import React from "react";
import "./App.css";
import { HomePage } from "./pages/HomePage";

// import {
//   addWatchedMovie,
//   add,
//   removeWatchedMovie,
//   getWatchedMovies,
// } from "./index.js";

/**
 *
 * React components should be stored in seperate folder called 'components'
 */
// const getMoviesComponents = (movies) => {
//   var components = [];

//   movies.forEach(function (movie) {
//     components.push(
//       <div className="all">
//         <div>
//           {/* Every img tag should have a valid alt attribute value, describing the image for accessibility sake*/}
//           <img src={movie.image} height="100px" />
//         </div>
//         <span>
//           {/* Every a tag should have a valid href value */}
//           <a
//             className="movie-watched"
//             href="#"
//             onClick={function () {
//               // addWatchedMovie(movie.title, movie.comment, movie.image);
//             }}
//           >
//             {movie.title}
//           </a>
//         </span>
//         <br />
//         <span>{movie.comment}</span>
//         <br />
//         <br />
//       </div>
//     );
//   });

//   return components;
// };

/**
 * DRY or Don't Repeat Yourself
 * These two components render a same html so they should be definded as one
 *
 */
// function getWatchedMoviesComponents(movies) {
//   var components = [];

//   movies.forEach(function (movie) {
//     components.push(
//       movie && (
//         <div className="watched">
//           <div>
//             <img src={movie.image} height="100px" />
//           </div>
//           <span>
//             <a
//               className="movie-watched"
//               href="#"
//               onClick={function () {
//                 // removeWatchedMovie(movie.title);
//               }}
//             >
//               {movie.title}
//             </a>
//           </span>
//           <br />
//           <span>{movie.comment}</span>
//           <br />
//           <br />
//         </div>
//       )
//     );
//   });

//   return components;
// }

/**
 *
 * This is not a best practice to define home page HTML code inside the Main App file.
 * It should be defined in seperate file. e.g: HomePage.jsx or MainPage.jsx or in this case MoviesPAge.jsx
 *
 */

function App(props) {
  return <HomePage />;
}

export default App;
