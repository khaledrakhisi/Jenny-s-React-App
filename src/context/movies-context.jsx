import React from "react";

import { useState } from "react";

export const MoviesContext = React.createContext({
  watchList: [],
  setWachList: () => {},
  watchedAlreadyList: [],
  setWatchedAlreadyList: () => {},
});

export const MoviesContextProvider = ({ children }) => {
  const [watchList, setWachedList] = useState([]);
  const [watchedAlreadyList, setWatchedAlreadyList] = useState([]);

  return (
    <MoviesContext.Provider
      value={{
        watchList,
        setWachList: setWachedList,
        watchedAlreadyList,
        setWatchedAlreadyList,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
