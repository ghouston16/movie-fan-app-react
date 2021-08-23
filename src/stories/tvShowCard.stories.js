import React from "react";
import TvShowCard from "../components/tvShowCard";
import SampleTvShow from "./sampleTvData";
import { MemoryRouter } from "react-router";
import TvShowsContextProvider from "../contexts/tvShowsContext";
import { action } from "@storybook/addon-actions";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";

export default {
  title: "Tv Shows Page/TvShowCard",
  component: TvShowCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <TvShowsContextProvider>{Story()}</TvShowsContextProvider>,
  ],
};

export const Basic = () => {
  return (
    <TvShowCard
      tvShow={SampleTvShow}
      action={(tvShow) => <AddToFavoritesIcon tvShow={tvShow} />}
      taging={(tvShow) => null}
    />
  );
};
Basic.storyName = "Default";

export const Exceptional = () => {
  const sampleNoPoster = { ...SampleTvShow, poster_path: undefined };
  return (
    <TvShowCard
      tvShow={sampleNoPoster}
      action={(tvShow) => <AddToFavoritesIcon tvShow={tvShow} />}
      taging={(tvShow) => null}
    />
  );
};
Exceptional.storyName = "exception";
