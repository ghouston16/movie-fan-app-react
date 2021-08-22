import React from "react";
import { withRouter } from "react-router-dom";
import PageTemplate from "../components/templateTvShowPage";
import TvShowReview from "../components/tvShowReview";

const TvShowReviewPage = (props) => {
  const {tvShow, review} = props.location.state
  return (
    <PageTemplate tvShow={tvShow}>
      <TvShowReview review={review} />
    </PageTemplate>
  );
};

export default withRouter(TvShowReviewPage);