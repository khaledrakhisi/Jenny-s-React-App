import React, { useCallback, useContext, useEffect, useState } from "react";
import { getAllMovies } from "../api/mock-api";
import { MoviesList } from "../components/MoviesList";
import { MoviesContext } from "../context/movies-context";

import classes from "./HomePage.module.css";

export const HomePage = () => {
  const {
    watchList,
    setWatchList,
    addOneToWatchList,
    watchedAlreadyList,
    addOneToWatchedAlreadyList,
  } = useContext(MoviesContext);

  const [inputs, setInputs] = useState({
    title: "",
    image: "",
    comment: "",
  });

  /**
   *
   * Fetching data from MOCK API
   */
  useEffect(() => {
    const fetch_data = async () => {
      const response = await getAllMovies();
      setWatchList(response);
    };
    fetch_data();
  }, [setWatchList]);

  // This function moved from inside of input to here to be shared among all inputs
  const inputChangeHandler = useCallback(
    (e) => {
      const { name, value } = e.target;
      setInputs((prev) => {
        return {
          ...prev,
          [name]: value,
        };
      });
    },
    [setInputs]
  );

  const formSubmitHandler = useCallback(
    (e) => {
      e.preventDefault();
      addOneToWatchList(inputs.title, inputs.image, inputs.comment);
    },
    [inputs.title, inputs.image, inputs.comment, addOneToWatchList]
  );

  const watchListClickHandle = useCallback(
    (listType, { title, image, comment }) => {
      if (listType === "watch") {
        addOneToWatchedAlreadyList(title, image, comment);
      } else if (listType === "watched") {
      }
    },
    [addOneToWatchedAlreadyList]
  );

  return (
    <section className={classes.homepage}>
      <h1>Codest Movies!</h1>
      <h1>Add movie!</h1>
      <form className={classes.form_container} onSubmit={formSubmitHandler}>
        <div className={classes.field}>
          <label htmlFor="title">TITLE:</label>
          <input
            id="title"
            name="title"
            type="text"
            value={inputs.title}
            onChange={inputChangeHandler}
            required
          />
        </div>
        <div className={classes.field}>
          <label htmlFor="image">IMAGE URL:</label>
          <input
            id="image"
            name="image"
            type="text"
            value={inputs.image}
            onChange={inputChangeHandler}
            required
          />
        </div>
        <div className={classes.field}>
          <label htmlFor="comment">COMMENT:</label>
          <input
            id="comment"
            name="comment"
            type="text"
            value={inputs.comment}
            onChange={inputChangeHandler}
            required
          />
        </div>
        <input className={classes.submit} type="submit" value="ADD MOVIE" />
      </form>

      <h1>Watchlist:</h1>
      {/* {getMoviesComponents(getAllMovies())} */}
      {watchList && (
        <MoviesList
          movies={watchList}
          onClick={watchListClickHandle}
          listType="watch"
        />
      )}

      <h1>Already watched:</h1>
      {/* {getWatchedMoviesComponents(getWatchedMovies())} */}
      <MoviesList
        movies={watchedAlreadyList}
        onClick={watchListClickHandle}
        listType="watched"
      />
    </section>
  );
};

/**
 *
 * Should use Controlled inputs with state. using global variabl is not a best practice and doesn't update the view
 */
// var title = "";
// var image = "";
// var comment = "";
