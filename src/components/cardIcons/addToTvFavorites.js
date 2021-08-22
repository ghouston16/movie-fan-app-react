import React, { useContext } from "react";
import { TvShowsContext } from "../../contexts/tvShowsContext";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";

const AddToTvFavoritesIcon = ({ tvShow }) => {
  const context = useContext(TvShowsContext);

  const handleAddToTvFavorites = (e) => {
    e.preventDefault();
    context.addToTvFavorites(tvShow);
  };
  return (
    <IconButton aria-label="add to favorites" onClick={handleAddToTvFavorites}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToTvFavoritesIcon;