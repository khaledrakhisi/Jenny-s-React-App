import React from "react";

import { useState } from "react";

export const MoviesContext = React.createContext({
  watchList: [],
  setWatchList: () => {},
  addOneToWatchList: (title, image, comment) => {},
  removeOneFromWatchList: (title) => {},
  watchedAlreadyList: [],
  setWatchedAlreadyList: () => {},
  addOneToWatchedAlreadyList: (title, image, comment) => {},
});

export const MoviesContextProvider = ({ children }) => {
  const [watchList, setWatchList] = useState([]);
  const [watchedAlreadyList, setWatchedAlreadyList] = useState([]);

  const addOneToWatchList = (title, image, comment) => {
    setWatchList((prev) => {
      return [...prev, { title, image, comment }];
    });
  };

  const addOneToWatchedAlreadyList = (title, image, comment) => {
    setWatchedAlreadyList((prev) => {
      return [...prev, { title, image, comment }];
    });
  };

  return (
    <MoviesContext.Provider
      value={{
        watchList,
        setWatchList,
        addOneToWatchList,
        watchedAlreadyList,
        setWatchedAlreadyList,
        addOneToWatchedAlreadyList,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
