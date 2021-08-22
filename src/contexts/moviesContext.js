import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [ myReviews, setMyReviews ] = useState( {} );
  const [ favorites, setFavorites ] = useState( [] );
  const [ watchlist, setWatchlist ] = useState( [] );
  // Add movie review
  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };
  // Add movie to favorites
  const addToFavorites = (movie) => {
    setFavorites([...favorites,movie.id])
  };
  // Add movie to watchlist
  const addToWatchlist = (movie) => {
    setWatchlist([...watchlist, movie.id])
  };
  // Remove from Watchlist 
  const removeFromWatchlist = (movie) => {
    setWatchlist( watchlist.filter(
      (mId) => mId !== movie.id
    ) )
  };
  // We will use this function in a later section
  const removeFromFavorites = (movie) => {
    setFavorites( favorites.filter(
      (mId) => mId !== movie.id
    ) )
  };

  return (
    <MoviesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        addReview,
        watchlist,
        addToWatchlist,
        removeFromWatchlist
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;