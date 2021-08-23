import React from "react";
import RateReviewIcon from "@material-ui/icons/RateReview";
import { Link } from "react-router-dom";

const WriteTvReviewIcon = ({ tvShow }) => {
  return (
    <Link
      to={{
        pathname: `/tv/reviewform`,
        state: {
          tvShowId: tvShow.id,
        },
      }}
    >
      <RateReviewIcon color="primary" fontSize="large" />
    </Link>
  );
};

export default WriteTvReviewIcon;