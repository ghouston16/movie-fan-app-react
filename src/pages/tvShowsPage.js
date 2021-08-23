import React from "react";
import PageTemplate from "../components/templateTvShowListPage";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import {getTvShows} from '../api/tmdb-api';
import AddToTvFavoritesIcon from "../components/cardIcons/addToTvFavorites";
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
  const tvFavorites = tvShows.filter(m => m.tvFavorite)
  localStorage.setItem('tvFavorites', JSON.stringify(tvFavorites))
 // const addToFavorites = (tvShowId) => true 

  return (
    <PageTemplate
      title="TV"
      tvShows={tvShows}
      action={(tvShow) => {
        return <AddToTvFavoritesIcon tvShow={tvShow} />
      }}
    />
);
};
export default TvShowsPage;
