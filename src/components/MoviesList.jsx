import React from "react";

import classes from "./MoviesList.module.css";

export const MoviesList = ({ movies, onClick, listType }) => {
  //Instead of forach and pushing to new array we should use .map method
  return (
    <div className={classes.container}>
      {/* using ES6 js */}
      {movies.map((movie) => (
        <div key={movie.title} className={classes.movieitem}>
          <img src={movie.image} alt={movie.title} />
          <div className={classes.titlearea}>
            <div
              className={classes.title}
              onClick={() => {
                onClick(listType, movie);
              }}
            >
              {movie.title}
            </div>
            <p className={classes.comment}>{movie.comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
