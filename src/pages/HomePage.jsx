import React, { useContext, useEffect } from "react";
import { getAllMovies } from "../api/mock-api";
import { MoviesList } from "../components/MoviesList";
import { MoviesContext } from "../context/movies-context";

import classes from "./HomePage.module.css";

export const HomePage = () => {
  const { watchList, setWachList } = useContext(MoviesContext);

  /**
   *
   * Fetching data from MOCK API
   */
  useEffect(() => {
    const fetch_data = async () => {
      const response = await getAllMovies();
      setWachList(response);
    };
    fetch_data();
  }, []);

  return (
    <section className={classes.homepage}>
      <h1>Codest Movies!</h1>
      <h1>Add movie!</h1>
      <form className={classes.forminput}>
        <div className={classes.field}>
          <label htmlFor="title">TITLE:</label>
          <input
            id="title"
            type="text"
            onChange={function (e) {
              title = e.target.value;
            }}
          />
        </div>
        <div className={classes.field}>
          <label htmlFor="image">IMAGE URL:</label>
          <input
            id="image"
            type="text"
            onChange={function (e) {
              image = e.target.value;
            }}
          />
        </div>
        <div className={classes.field}>
          <label htmlFor="comment">COMMENT:</label>
          <input
            id="comment"
            type="text"
            onChange={function (e) {
              comment = e.target.value;
            }}
          />
        </div>
        <br />
        <input
          type="button"
          onClick={function (e) {
            // add(title, image, comment);
          }}
          value="ADD MOVIE"
        />
      </form>

      <h1>Watchlist:</h1>
      {/* {getMoviesComponents(getAllMovies())} */}
      {watchList && <MoviesList movies={watchList} />}

      <h1>Already watched:</h1>
      {/* {getWatchedMoviesComponents(getWatchedMovies())} */}
    </section>
  );
};

/**
 *
 * Should use Controlled inputs with state.
 */
var title = "";
var image = "";
var comment = "";
