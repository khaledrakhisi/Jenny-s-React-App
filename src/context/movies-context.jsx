import React, { useEffect, useState } from "react";

import { config } from "../config/config";

/**
 *
 * React intoduced Context API to manage the global state of your application.
 * by using Context API you will inpower your application with a great tool to share the state throughout the entire application.
 * and there is no need to pass props from parent to childs
 */

export const MoviesContext = React.createContext({
  watchList: [],
  setWatchList: () => {},
  addOneToWatchList: (title, image, comment) => {},
  removeOneFromWatchList: (title) => {},

  watchedAlreadyList: [],
  setWatchedAlreadyList: () => {},
  addOneToWatchedAlreadyList: (title, image, comment) => {},
  removeOneFromWatchAlreadyList: (title) => {},
});

export const MoviesContextProvider = ({ children }) => {
  const [watchList, setWatchList] = useState([]);
  const [watchedAlreadyList, setWatchedAlreadyList] = useState([]);

  /**
   *
   * If the new item is exist based on title, prevent adding duplicate object
   */
  const addOneToWatchList = (title, image, comment) => {
    if (watchList.some((item) => item.title === title)) {
      return false;
    }
    setWatchList((prev) => {
      return [...prev, { title, image, comment }];
    });
    return true;
  };

  const removeOneFromWatchList = (title) => {
    setWatchList((prev) => [...prev.filter((item) => item.title !== title)]);
  };

  /**
   *
   * If the new item is exist based on title, prevent adding duplicate object
   */
  const addOneToWatchedAlreadyList = (title, image, comment) => {
    if (watchedAlreadyList.some((item) => item.title === title)) {
      return false;
    }
    setWatchedAlreadyList((prev) => {
      return [...prev, { title, image, comment }];
    });
    return true;
  };

  const removeOneFromWatchAlreadyList = (title) => {
    setWatchedAlreadyList((prev) => [
      ...prev.filter((item) => item.title !== title),
    ]);
  };

  useEffect(() => {
    localStorage.setItem(config.watchListName, JSON.stringify(watchList));
  }, [watchList]);

  useEffect(() => {
    localStorage.setItem(
      config.watchedListName,
      JSON.stringify(watchedAlreadyList)
    );
  }, [watchedAlreadyList]);

  return (
    <MoviesContext.Provider
      value={{
        watchList,
        setWatchList,
        addOneToWatchList,
        removeOneFromWatchList,
        watchedAlreadyList,
        setWatchedAlreadyList,
        addOneToWatchedAlreadyList,
        removeOneFromWatchAlreadyList,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
