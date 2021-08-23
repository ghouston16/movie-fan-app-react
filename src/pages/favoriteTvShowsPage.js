import React, { useContext } from "react";
import PageTemplate from "../components/templateTvShowListPage";
import { TvShowsContext } from "../contexts/tvShowsContext";
import { useQueries } from "react-query";
import { getTvShow } from "../api/tmdb-api";
import Spinner from '../components/spinner';
import RemoveFromTvFavorites from "../components/cardIcons/removeFromTvFavorites";
import WriteTvReview from "../components/cardIcons/writeTvReview";

const FavoriteTvShowsPage = () => {
  const {tvFavorites: tvShowIds } = useContext(TvShowsContext);

  // Create an array of queries and run in parallel.
  const favoriteTvShowQueries = useQueries(
    tvShowIds.map((tvShowId) => {
      return {
        queryKey: ["tvShow", { id: tvShowId }],
        queryFn: getTvShow,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = favoriteTvShowQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }
  const tvShows = favoriteTvShowQueries.map((q) => q.data);
  //const toDo = () => true;

  return (
    <PageTemplate
      title="Favorite Tv Shows"
      tvShows={tvShows}
      action={(tvShow) => {
        return (
          <>
            <RemoveFromTvFavorites tvShow={tvShow} />
            <WriteTvReview tvShow={tvShow} />
          </>
        );
      }}
    />
  );
};
export default FavoriteTvShowsPage;