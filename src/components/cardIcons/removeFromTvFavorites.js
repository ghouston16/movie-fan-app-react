import React, { useContext } from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { TvShowsContext } from "../../contexts/tvShowsContext";

const RemoveFromTvFavoritesIcon = ({ tvShow }) => {
  const context = useContext(TvShowsContext);

  const handleRemoveFromTvFavorites = (e) => {
    e.preventDefault();
    context.removeFromTvFavorites(tvShow);
  };
  return (
    <IconButton
      aria-label="remove from favorites"
      onClick={handleRemoveFromTvFavorites}
    >
      <DeleteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromTvFavoritesIcon;