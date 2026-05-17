import { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

import { ArrowDownUp } from 'lucide-react';

import GenresEndpoints from '../../api/Genres';
import { discover } from '../../services/discover';

import MoviePoster from '../../components/ui/MoviePoster';

function CategoryDiscover() {
    const [genreVideos, setGenreVideos] = useState({
        page: 0,
        results: [],
        total_pages: 0,
        total_results: 0
    });

    const params = useParams();
    const [searchParams, setSearchParams] = useSearchParams();

    let mediaType = params.mediaType;
    let genreID = params.genreID;
    let genre = searchParams.get('genre') || 'all';
    let sort_by = searchParams.get('sort_by') || 'popularity.desc';
    let page = +searchParams.get('page') || 1;

    let isNextDisabled = page === genreVideos.total_pages;
    let isBackDisabled = page === 1;

    useEffect(() => {
        const fetchGenreVideos = async (endpoint) => {
            try {
                let data = await discover(endpoint);

                setGenreVideos({
                    page: data.page || 0,
                    results: data.results || [],
                    total_pages: data.total_pages || 0,
                    total_results: data.total_results || 0
                });

            } catch {
                return;
            }
        }

        mediaType === 'movies' ?
            fetchGenreVideos(GenresEndpoints.moviesByGenre(genreID, sort_by, page))
            :
            fetchGenreVideos(GenresEndpoints.tvByGenre(genreID, sort_by, page));

    }, [mediaType, genreID, sort_by, page]);

    const handleNext = () => {
        searchParams.set('page', page + 1);
        setSearchParams(searchParams);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    };

    const handleBack = () => {
        searchParams.set('page', page - 1);
        setSearchParams(searchParams);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    };

    const handleSort = () => {
        if (sort_by === 'popularity.desc') {
            searchParams.set('sort_by', 'popularity.asc');
            setSearchParams(searchParams);
        }
        else if (sort_by === 'popularity.asc') {
            searchParams.set('sort_by', 'popularity.desc');
            setSearchParams(searchParams);
        }
    };

    if (genreVideos.results.length === 0) return;

    return (
        <div className='flex flex-col gap-12.5'>
            <div className='flex justify-between items-center'>
                <h3 className='text-primary-text capitalize font-bold text-lg sm:text-2xl'>
                    {mediaType === 'movies' ?
                        `${genre} movies`
                        :
                        `${genre} tv shows`
                    }
                </h3>

                <ArrowDownUp
                    className='text-secondary-text size-5 sm:size-7 hover:text-primary duration-300'
                    onClick={handleSort} />

            </div>

            <div className='flex flex-col gap-4'>
                <div className='flex gap-2.5 text-primary-text capitalize font-bold sm:text-xl'>
                    &quot;<span className=''>{genreVideos.total_results}</span>
                    <span className=''>results</span>&quot;
                </div>

                <div className='grid gap-5 sm:gap-10 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]'>
                    {genreVideos.results.length > 0 ?
                        genreVideos.results.map(video => (
                            <MoviePoster
                                key={video.id}
                                posterPath={video.poster_path}
                                title={video.title} />
                        ))
                        :
                        null
                    }
                </div>
            </div>

            <div className='flex justify-center items-center'>
                <div className='flex gap-5 text-primary-text sm:text-xl'>
                    <button className='capitalize enabled:hover:text-primary duration-300 disabled:opacity-35'
                        disabled={isBackDisabled}
                        onClick={handleBack}>
                        back
                    </button>

                    <div className='flex justify-center items-center text-primary-text border-2 border-border rounded-full bg-primary w-10 h-10'>
                        {page}
                    </div>

                    <button
                        className='capitalize enabled:hover:text-primary duration-300 disabled:opacity-35'
                        disabled={isNextDisabled}
                        onClick={handleNext}>
                        next
                    </button>
                </div>
            </div>

        </div>
    )
}

export default CategoryDiscover;