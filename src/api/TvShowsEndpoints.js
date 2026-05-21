const TvEndpoints = {
    popular: '/tv/popular',
    topRated: '/tv/top_rated',
    onTheAir: '/tv/on_the_air',
    airingToday: '/tv/airing_today',
    trendingDay: '/trending/tv/day',
    trendingWeek: '/trending/tv/week',

    details: (id) => `/tv/${id}`,
    credits: (id) => `/tv/${id}/credits`,
    videos: (id) => `/tv/${id}/videos`,
    similar: (id) => `/tv/${id}/similar`,
    recommendations: (id) => `/tv/${id}/recommendations`,
};

export default TvEndpoints;