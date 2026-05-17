const GenresEndpoints = {
    movieGenres: '/genre/movie/list',
    tvGenres: '/genre/tv/list',

    moviesByGenre: (genreID, sortBy, page) => `/discover/movie?with_genres=${genreID}&sort_by=${sortBy || 'popularity.desc'}&page=${page || 1}`,
    tvByGenre: (genreID, sortBy, page) => `/discover/tv?with_genres=${genreID}&sort_by=${sortBy || 'popularity.desc'}&page=${page || 1}`,
};

export default GenresEndpoints;