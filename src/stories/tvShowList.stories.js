import React from "react";
import TvShowList from "../components/tvShowList";
import SampleTvShow from "./sampleTvData";
import { MemoryRouter } from "react-router";
import { action } from "@storybook/addon-actions";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";
import Grid from "@material-ui/core/Grid";
import TvShowsContextProvider from "../contexts/tvShowsContext";

export default {
  title: "Tv Shows Page/TvShowList",
  component: TvShowList,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <TvShowsContextProvider>{Story()}</TvShowsContextProvider>,
  ],
};

export const Basic = () => {
  const tvShows = [
    { ...SampleTvShow, id: 1 },
    { ...SampleTvShow, id: 2 },
    { ...SampleTvShow, id: 3 },
    { ...SampleTvShow, id: 4 },
    { ...SampleTvShow, id: 5 },
  ];
  return (
    <Grid container spacing={5}>
      <TvShowList
        tvShows={tvShows}
        action={(tvShow) => <AddToFavoritesIcon tvShow={tvShow} />}
      />
    </Grid>
  );
};
Basic.storyName = "Default";
