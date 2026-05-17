import { useState, useEffect } from "react";
import { toast } from "sonner";

import { useNavigate } from 'react-router-dom';

import { getTvShows } from '../../services/fetchTvShow';
import TvShowsEndpoints from '../../api/TvShowsEndpoints';

import Content from '../../components/ui/Content';

function TvShows() {

    const [showsList, setShowsList] = useState({
        trending: [],
        popular: [],
        topRated: [],
        airingToday: [],
    });

    const navigate = useNavigate();

    const sections = [
        {
            id: 1,
            title: 'Trending Tv Shows',
            movies: showsList.trending || []
        },
        {
            id: 2,
            title: 'Popular Tv Shows',
            movies: showsList.popular || []
        },
        {
            id: 3,
            title: 'Top Rated Tv Shows',
            movies: showsList.topRated || []
        },
        {
            id: 4,
            title: 'Airing Today Tv Shows',
            movies: showsList.airingToday || []
        }
    ];

    useEffect(() => {

        const fetchMovies = async (url, type) => {

            try {
                let movies = await getTvShows(url);

                if (!movies) throw new Error('Something went wrong.');

                setShowsList(prev => { return { ...prev, [type]: movies.results } });

            } catch (error) {
                toast.error(error.message);
            }
        }

        fetchMovies(TvShowsEndpoints.trendingDay, 'trending');
        fetchMovies(TvShowsEndpoints.popular, 'popular');
        fetchMovies(TvShowsEndpoints.topRated, 'topRated');
        fetchMovies(TvShowsEndpoints.airingToday, 'nowPlaying');

    }, []);

    const getID = (id) => navigate(`/home/tv-shows/${id}?mediaType=tv-shows`);

    return (
        <Content sections={sections} handleClick={getID} />
    )
}

export default TvShows