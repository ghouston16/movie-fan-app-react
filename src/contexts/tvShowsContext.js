import React, { useState } from "react";

export const TvShowsContext = React.createContext(null);

const TvShowsContextProvider = (props) => {
  const [ myTvReviews, setMyTvReviews ] = useState( {} );
  const [ tvFavorites, setTvFavorites ] = useState( [] );
  const [ tvWatchlist, setTvWatchlist ] = useState( [] );
  // Add tvShow review
  const addTvReview = (tvShow, tvReview) => {
    setMyTvReviews( {...myTvReviews, [tvShow.id]: tvReview } )
  };
  // Add tvShow to favorites
  const addToTvFavorites = (tvShow) => {
    setTvFavorites([...tvFavorites,tvShow.id])
  };
  // Add tvShow to watchlist
  const addToTvWatchlist = (tvShow) => {
    setTvWatchlist([...tvWatchlist, tvShow.id])
  };
  // Remove from Watchlist 
  const removeFromTvWatchlist = (tvShow) => {
    setTvWatchlist( tvWatchlist.filter(
      (mId) => mId !== tvShow.id
    ) )
  };
  // We will use this function in a later section
  const removeFromTvFavorites = (tvShow) => {
    setTvFavorites( tvFavorites.filter(
      (mId) => mId !== tvShow.id
    ) )
  };

  return (
    <TvShowsContext.Provider
      value={{
        tvFavorites,
        addToTvFavorites,
        removeFromTvFavorites,
        addTvReview,
        tvWatchlist,
        addToTvWatchlist,
        removeFromTvWatchlist
      }}
    >
      {props.children}
    </TvShowsContext.Provider>
  );
};

export default TvShowsContextProvider;