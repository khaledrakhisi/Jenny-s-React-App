import React from "react";

import classes from "./MoviesList.module.css";

export const MoviesList = ({ movies, onClick, listType }) => {
  //Instead of foreach and pushing to new array we should use .map method
  return (
    <div className={classes.container}>
      {/* using ES6 js */}
      {movies
        .sort((item1, item2) => {
          if (item1.title > item2.title) {
            return 1;
          } else if (item1.title < item2.title) {
            return -1;
          }
          return 0;
        })
        .map((movie) => (
          <div
            key={movie.title}
            className={classes.movieitem}
            data-testid="movie_item"
          >
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
