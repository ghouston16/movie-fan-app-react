import React from "react";
import PageTemplate from "../components/templateTvShowPage";
import ReviewForm from "../components/tvReviewForm";
import { withRouter } from "react-router-dom";
import { useQuery } from "react-query";
import { getTvShow } from "../api/tmdb-api";
import Spinner from "../components/spinner";

const WriteReviewPage = (props) => {
  const { tvShowId } = props.location.state;
  const { data: tvShow, error, isLoading, isError } = useQuery(
    ["tvShow", { id: tvShowId }],
    getTvShow
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <PageTemplate tvShow={tvShow}>
      <ReviewForm tvShow={tvShow} />
    </PageTemplate>
  );
};

export default withRouter(WriteReviewPage);