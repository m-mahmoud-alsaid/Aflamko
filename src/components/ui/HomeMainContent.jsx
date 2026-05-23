import { useState, useEffect } from 'react';
import { toast } from "sonner";
import { useNavigate } from 'react-router-dom';

import Content from './Content';

import { getTrending } from '../../services/FetchTrending';
import MoviesEndpoints from '../../api/MoviesEndpoints';
import TvShowsEndpoints from '../../api/TvShowsEndpoints';

function HomeMainContent() {

    const [myList, setMyList] = useState({
        trending: [],
        popularMovies: [],
        popularTvShows: [],
    });

    const navigate = useNavigate();

    const sections = [
        {
            id: 1,
            title: 'Trending Now',
            movies: myList.trending,
        },
        {
            id: 2,
            title: 'Popular Movies',
            movies: myList.popularMovies,
        },
        {
            id: 3,
            title: 'Popular Tv Shows',
            movies: myList.popularTvShows,
        }
    ];

    useEffect(() => {

        const fetchMovies = async (url, type, mediaType = '') => {

            try {

                const movies = await getTrending(url);

                if (!movies) {
                    throw new Error('Something went wrong.');
                }

                const results = movies.results.map(movie => ({
                    ...movie,
                    media_type: movie.media_type || mediaType
                }));

                setMyList(prev => ({
                    ...prev,
                    [type]: results
                }));

            } catch (error) {
                toast.error(error.message);
            }
        };

        fetchMovies('/trending/all/week', 'trending');

        fetchMovies(
            MoviesEndpoints.popularMovies,
            'popularMovies',
            'movie'
        );

        fetchMovies(
            TvShowsEndpoints.popular,
            'popularTvShows',
            'tv'
        );

    }, []);

    const getID = (id, mediaType) => {

        if (mediaType === 'movie') {
            navigate(`/home/movies/${id}?mediaType=movies`);
        } else {
            navigate(`/home/tv-shows/${id}?mediaType=tv-shows`);
        }
    };

    return (
        <Content
            sections={sections}
            handleClick={getID}
        />
    );
}

export default HomeMainContent;