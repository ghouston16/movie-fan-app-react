import React from "react";
import PageTemplate from "../components/templateTvShowListPage";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import {getUpcomingTvShows} from '../api/tmdb-api';
//import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";
import AddToWatchlistIcon from "../components/cardIcons/addToWatchlist";


const UpcomingTvShowsPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('upcomingTvShows', getUpcomingTvShows)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const tvShows = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = tvShows.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
 // const addToFavorites = (tvShowId) => true 

  return (
    <PageTemplate
      title="On TV Today"
      tvShows={tvShows}
      action={(tvShow) => {
        return <AddToWatchlistIcon tvShow={tvShow} />
      }}
    />
);
};
export default UpcomingTvShowsPage;
