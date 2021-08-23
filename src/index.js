import React from "react";
import ReactDOM from "react-dom";
//import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage"; // NEW
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import WatchlistMoviesPage from './pages/watchlistMoviesPage';
// new import statements for TV show functionality
import TvShowsPage from './pages/tvShowsPage';
import TvShowPage from './pages/tvShowDetailsPage';
import TvShowReviewPage from './pages/tvShowReviewPage';
import TvShowsContextProvider from "./contexts/tvShowsContext";
import UpcomingTvShowsPage from "./pages/upcomingTvShowsPage";
import FavoriteTvShowsPage from "./pages/favoriteTvShowsPage";
import TvReviewPage from "./pages/tvShowReviewPage"
import AddTvReviewPage from "./pages/addTvReviewPage";
// Declare query client for cache
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />      {/* New Header  */}
        <MoviesContextProvider>
        <TvShowsContextProvider>
          {" "}
          <Switch>
            <Route exact path="/reviews/form" component={AddMovieReviewPage} />
            <Route exact path="/movies/upcoming" component={UpcomingMoviesPage} />
            <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
            <Route exact path="/movies/watchlist" component={WatchlistMoviesPage} />
            <Route exact path="/tvshows" component={TvShowsPage} />
            <Route exact path="/tvshows/:id" component={TvShowPage} />
            <Route path="/movies/:id" component={MoviePage} />
            <Route exact path="/" component={HomePage} />
            <Route path="/reviews/:id" component={MovieReviewPage} />
            <Route path="/tvReviews/:id" component={TvShowReviewPage} />
            <Route path='/tv/today' component={UpcomingTvShowsPage} />
            <Route path="/tv/favorites" component={FavoriteTvShowsPage} />
            <Route exact path="/tv/reviewform" component={AddTvReviewPage} />
            <Redirect from="*" to="/" />
          </Switch>
          </TvShowsContextProvider>
        </MoviesContextProvider>
        </BrowserRouter>
  
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
