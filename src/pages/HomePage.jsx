import React, { useCallback, useContext, useEffect, useState } from "react";
import { MoviesList } from "../components/MoviesList";
import { config } from "../config/config";
import { MoviesContext } from "../context/movies-context";
import { MOCK_DATA } from "../data/data";

import classes from "./HomePage.module.css";

export const HomePage = () => {
  const {
    watchList,
    setWatchList,
    addOneToWatchList,
    removeOneFromWatchList,
    watchedAlreadyList,
    setWatchedAlreadyList,
    addOneToWatchedAlreadyList,
    removeOneFromWatchAlreadyList,
  } = useContext(MoviesContext);

  const [inputs, setInputs] = useState({
    title: "",
    image: "",
    comment: "",
  });

  /**
   *
   *In here the data will be loaded from local storage and if no data is exist, default will be in the watch list
   */
  useEffect(() => {
    const localstorageWatchMovies = JSON.parse(
      localStorage.getItem(config.watchListName)
    );
    const localstorageWatchedMovies = JSON.parse(
      localStorage.getItem(config.watchedListName)
    );

    setWatchList(localstorageWatchMovies);
    setWatchedAlreadyList(localstorageWatchedMovies);

    if (!localstorageWatchMovies || localstorageWatchMovies.length === 0) {
      setWatchList(MOCK_DATA);
    }
  }, [setWatchList, setWatchedAlreadyList]);

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

      if (addOneToWatchList(inputs.title, inputs.image, inputs.comment)) {
        setInputs({ title: "", image: "", comment: "" });
      } else {
        alert("Already exist!");
      }
    },
    [inputs.title, inputs.image, inputs.comment, addOneToWatchList]
  );

  const itemClickHandle = useCallback(
    (listType, { title, image, comment }) => {
      if (listType === "watch") {
        if (!addOneToWatchedAlreadyList(title, image, comment)) {
          alert(
            "This movie exist in wached list, anyway its going to be deleted."
          );
        }
        removeOneFromWatchList(title);
      } else if (listType === "watched") {
        removeOneFromWatchAlreadyList(title);
      }
    },
    [
      addOneToWatchedAlreadyList,
      removeOneFromWatchList,
      removeOneFromWatchAlreadyList,
    ]
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
      {watchList ? (
        <MoviesList
          movies={watchList}
          onClick={itemClickHandle}
          listType="watch"
        />
      ) : (
        <p>List is empty </p>
      )}

      <h1>Already watched:</h1>
      {watchedAlreadyList ? (
        <MoviesList
          movies={watchedAlreadyList}
          onClick={itemClickHandle}
          listType="watched"
        />
      ) : (
        <p>
          whated list also is empty. click on movie title above to add to this
          list
        </p>
      )}
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
