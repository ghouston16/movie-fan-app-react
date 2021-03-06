export const getMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
  );
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};
export const getUpcomingMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    //`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=1`
  );
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};
export const getTopRatedMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    //`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=1`
  );
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};
export const getMovie = async (args) => {
  // console.log(args)
  // eslint-disable-next-line no-unused-vars
  const [prefix, { id }] = args.queryKey;
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
  );
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};

export const getGenres = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
    process.env.REACT_APP_TMDB_KEY +
    "&language=en-US"
  )
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};

export const getMovieImages = async ({ queryKey }) => {
  // eslint-disable-next-line no-unused-vars
  const [prefix, { id }] = queryKey;
  const response = await fetch(
    // request updated to filter image language
    `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&append_to_response=images&include_image_language=en,null`
  )
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};

export const getMovieReviews = (id) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
  )
    .then((res) => res.json())
    .then((json) => {
      // console.log(json.results);
      return json.results;
    });
};

export const getTvShows = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
  );
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};
export const getUpcomingTvShows = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/tv/airing_today?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&timezone=GMT+1:00&include_adult=false&include_video=false&page=1`
    //`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=1`
  );
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};
export const getTvShow = async (args) => {
  // console.log(args)
  // eslint-disable-next-line no-unused-vars
  const [prefix, { id }] = args.queryKey;
  const response = await fetch(
    `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
  );
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};

export const getTvShowGenres = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/genre/tv/list?api_key=" +
    process.env.REACT_APP_TMDB_KEY +
    "&language=en-US"
  )
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};

export const getTvShowImages = async ({ queryKey }) => {
  // eslint-disable-next-line no-unused-vars
  const [prefix, { id }] = queryKey;
  const response = await fetch(
    // request updated to filter image language
    `https://api.themoviedb.org/3/tv/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&append_to_response=images&include_image_language=en,null`
  )
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};

export const getTvShowReviews = (id) => {
  return fetch(
    `https://api.themoviedb.org/3/tv/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
  )
    .then((res) => res.json())
    .then((json) => {
      // console.log(json.results);
      return json.results;
    });
};

export const getTvCast = (id) => {
  return fetch(
    `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}`
  )
    .then((res) => res.json())
    .then((json) => {
      console.log(json.results);
      return json.results;
    });
};