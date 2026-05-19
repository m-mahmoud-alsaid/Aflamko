import { useState, useEffect } from 'react';
import { toast } from "sonner";

import Content from './Content';

import { getTrending } from '../../services/fetchTrending';
import MoviesEndpoints from '../../api/MoviesEndpoints';
import TvShowsEndpoints from '../../api/TvShowsEndpoints';

function HomeMainContent() {

    const [myList, setMyList] = useState({
        trending: [],
        popularMovies: [],
        popularTvShows: [],
    });

    const sections = [
        {
            id: 1,
            title: 'Trending Now',
            movies: myList.trending || []
        },
        {
            id: 2,
            title: 'Popular Movies',
            movies: myList.popularMovies || []
        },
        {
            id: 3,
            title: 'Popular Tv Shows',
            movies: myList.popularTvShows || []
        }
    ];

    useEffect(() => {

        const fetchMovies = async (url, type) => {

            try {
                let movies = await getTrending(url);

                if (!movies) throw new Error('Something went wrong.');

                setMyList(prev => { return { ...prev, [type]: movies.results } });

            } catch (error) {
                toast.error(error.message);
            }
        }

        fetchMovies('/trending/all/week', 'trending');
        fetchMovies(MoviesEndpoints.popularMovies, 'popularMovies');
        fetchMovies(TvShowsEndpoints.popular, 'popularTvShows');

    }, []);


    return (
        <Content sections={sections} />
    )
}

export default HomeMainContent;