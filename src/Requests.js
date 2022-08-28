const APIkey = 'c15385d2fb5510323edc7b0d2a064f8b';

const requests = {
  requestPopularMovies: `https://api.themoviedb.org/3/movie/popular?api_key=${APIkey}&language=en-US&page=1`,
  requestTopRatedMovies: `https://api.themoviedb.org/3/movie/top_rated?api_key=${APIkey}&language=en-US&page=1`,
  requestTrendingMovies: `https://api.themoviedb.org/3/movie/popular?api_key=${APIkey}&language=en-US&page=2`,
  requestUpcomingMovies: `https://api.themoviedb.org/3/movie/upcoming?api_key=${APIkey}&language=en-US&page=1`,
};

export default requests;