import React from "react";
import PageTemplate from "../components/templateTvShowListPage";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import {getTvShows} from '../api/tmdb-api';
import AddToFavoritesIcon from "../components/cardIcons/addToTvFavorites";
import AddToWatchlistIcon from "../components/cardIcons/addToWatchlist";


const TvShowsPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('tvShows', getTvShows)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const tvShows= data.results;
  console.log(tvShows);

  // Redundant, but necessary to avoid app crashing.
  const favorites = tvShows.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
 // const addToFavorites = (tvShowId) => true 

  return (
    <PageTemplate
      title="TV"
      tvShows={tvShows}
      action={(tvShow) => {
        return <AddToWatchlistIcon tvShow={tvShow} />
      }}
    />
);
};
export default TvShowsPage;
