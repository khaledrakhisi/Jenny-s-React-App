import React from "react";

import classes from "./MoviesList.module.scss";

export const MoviesList = ({ movies, onClick, listType }) => {
  //Instead of foreach and pushing to new array we should use .map method

  return (
    <ul className={classes.container}>
      {/* using ES6 js */}
      {movies
        // Sorting takes place here
        .sort((item1, item2) => {
          if (item1.title.toLowerCase() > item2.title.toLowerCase()) {
            return 1;
          } else if (item1.title.toLowerCase() < item2.title.toLowerCase()) {
            return -1;
          }
          return 0;
        })
        .map((movie) => (
          <li
            key={movie.title}
            className={classes.movieitem}
            data-testid="movie_item"
          >
            <img src={movie.image} alt={movie.title} />
            <div className={classes.movieitem__titlearea}>
              <h4
                className={classes.movieitem__titlearea__title}
                onClick={() => {
                  onClick(listType, movie);
                }}
              >
                {movie.title}
              </h4>
              <p className={classes.movieitem__titlearea__comment}>
                {movie.comment}
              </p>
            </div>
          </li>
        ))}
    </ul>
  );
};
