const MoviesEndpoints = {
    popularMovies: '/movie/popular',
    topRatedMovies: '/movie/top_rated',
    upcomingMovies: '/movie/upcoming',
    nowPlayingMovies: '/movie/now_playing',
    dayTrendingMovies: '/trending/movie/day',
    weekTrendingMovies: '/trending/movie/week',

    movieDetails: (id) => `/movie/${id}`,
    similarMovies: (id) => `/movie/${id}/similar`,
    recommendations: (id) => `/movie/${id}/recommendations`,
};

export default MoviesEndpoints;