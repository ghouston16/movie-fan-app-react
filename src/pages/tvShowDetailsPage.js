import React from "react";
import { withRouter } from "react-router-dom";
import TvShowDetails from "../components/tvShowDetails";
import PageTemplate from "../components/templateTvShowPage";
//import useTvShow from "../hooks/useTvShow";
import { getTvShow } from '../api/tmdb-api';
//import { getTvCast } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'

const TvShowDetailsPage = (props) => {
  const { id } = props.match.params

  const { data: tvShow, error, isLoading, isError } = useQuery(
    ["tvShow", { id: id }],
    getTvShow,
  //  getTvCast
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <>
      {tvShow ? (
        <>
          <PageTemplate tvShow={tvShow}>
            <TvShowDetails tvShow={tvShow} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for tvShow details</p>
      )}
    </>
  );
};

export default withRouter(TvShowDetailsPage);