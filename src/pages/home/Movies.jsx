import { useState, useEffect } from "react";
import { toast } from "sonner";

// Dealing With API 
import { getMovies } from '../../services/FetchMovies';
import MoviesEndpoints from '../../api/MoviesEndpoints';

import Content from '../../components/ui/Content';

function Movies() {
    const [moviesList, setMoviesList] = useState({
        trending: [],
        popular: [],
        topRated: [],
        nowPlaying: [],
        upcoming: [],
    });

    const sections = [
        {
            id: 1,
            title: 'Trending Movies',
            movies: moviesList.trending || []
        },
        {
            id: 2,
            title: 'Popular Movies',
            movies: moviesList.popular || []
        },
        {
            id: 3,
            title: 'Top Rated Movies',
            movies: moviesList.topRated || []
        },
        {
            id: 4,
            title: 'Now Playing Movies',
            movies: moviesList.nowPlaying || []
        },
        {
            id: 5,
            title: 'Upcoming Movies',
            movies: moviesList.upcoming || []
        }
    ];

    useEffect(() => {

        const fetchMovies = async (url, type) => {

            try {
                let movies = await getMovies(url);

                if (!movies) throw new Error('Something went wrong.');

                setMoviesList(prev => { return { ...prev, [type]: movies.results } });

            } catch (error) {
                toast.error(error.message);
            }
        }

        fetchMovies(MoviesEndpoints.dayTrendingMovies, 'trending');
        fetchMovies(MoviesEndpoints.popularMovies, 'popular');
        fetchMovies(MoviesEndpoints.topRatedMovies, 'topRated');
        fetchMovies(MoviesEndpoints.nowPlayingMovies, 'nowPlaying');
        fetchMovies(MoviesEndpoints.upcomingMovies, 'upcoming');

    }, []);

    useEffect(() => {
        console.log(moviesList);
    }, [moviesList]);

    return (
        <Content sections={sections} />
    )
}

export default Movies