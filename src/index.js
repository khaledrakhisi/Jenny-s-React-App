import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

/**
 * The Seperation of concerns is not followed here.
 * This function should not be here. Better use a State Management approach
 */
export function getWatchedMovies() {
  var movies = localStorage.getItem("movies-watched");

  if (!movies) {
    return [];
  } else {
    return JSON.parse(movies);
  }
}

/**
 * The Seperation of concerns is not followed here.
 * This function should not be here. Better move this hard-coded data to a seperate file called data.js or api.js
 */
export function getAllMovies() {
  var movies = localStorage.getItem("movies-all");

  if (!movies) {
    return [
      {
        title: "The Avengers",
        image:
          "http://d21lz9b0v8r1zn.cloudfront.net/wp-content/uploads//2012/03/detail.jpg",
        comment: "New York blows up in this!",
      },
      {
        title: "Dark City",
        image: "https://i.chzbgr.com/full/5569379584/hA96709E0/",
        comment: "This looks mysterious. Cool!",
      },
      {
        title: "Hot Tub Time Machine",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG7vNmphIcVhEcybvSvMgbTkV6EE2twHBNanKvgDx3ZS7Ivn6Dtg",
        comment: "Someone said this was fun. Maybe!",
      },
    ];
  } else {
    return JSON.parse(movies);
  }
}

/**
 *
 * 1 - This function should not be here. Better use a State Management approach and add/delete/... should be a dispatch to the global state
 * 2 - The name of the function should be more self-comentairy. e.g : addMovieToList
 */
export function add(title, description, image) {
  var movie = {};
  movie.title = title;
  movie.description = description;
  movie.image = image;

  var movies = getAllMovies();
  movies.push(movie);

  localStorage.setItem("movies-all", JSON.stringify(movies));

  //   * This kind of re-rendering is not best practice and not efficient
  render();
}

/**
 *
 * This function should not be here. Better use a State Management approach
 */
export function addWatchedMovie(title, description, image) {
  var movie = {};
  movie.title = title;
  movie.description = description;
  movie.image = image;

  var movies = getWatchedMovies();
  movies.push(movie);

  localStorage.setItem("movies-watched", JSON.stringify(movies));

  //* This kind of re-rendering is not best practice and not efficient
  render();
}

/**
 *
 * This function should not be here. Better use a State Management approach
 */
export function removeWatchedMovie(title) {
  var movies = getWatchedMovies();

  for (var i = 0; i < movies.length; i++) {
    if (!movies[i]) continue;
    // Better use ===. because it is safer checking type and value
    if (movies[i].title == title) {
      movies[i] = null;
    }
  }

  localStorage.setItem("movies-watched", JSON.stringify(movies));

  render();
}

/**
 *
 * This kind of re-rendering is not best practice and not efficient
 */
function render() {
  ReactDOM.render(
    <App movies={getAllMovies()} watched={getWatchedMovies()} />,
    document.getElementById("root")
  );
}

render();
