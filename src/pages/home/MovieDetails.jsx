import { useState, useEffect, useMemo } from 'react';
import { useParams, useSearchParams, Navigate, useNavigate } from 'react-router-dom';

import { FaStar } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { Play, Bookmark, Heart } from 'lucide-react';

import MoviesEndpoints from '../../api/MoviesEndpoints';
import TvShowsEndpoints from '../../api/TvShowsEndpoints';
import { getMovies } from '../../services/fetchMovies';

import Content from '../../components/ui/Content';

import Colors from '../../constants/Colors';

function generateColor(genres) {
    const obj = {};

    genres.forEach(item => {
        obj[item.id] = Colors[item.id % Colors.length];
    })

    return obj;
}

export default function MovieDetails() {
    const [details, setDetails] = useState();
    const [similar, setSimilar] = useState();
    const [recommended, setRecommended] = useState();
    const navigate = useNavigate();

    const { id } = useParams();
    const [searchParams] = useSearchParams();

    const genreColor = useMemo(() => generateColor(details?.genres || []), [details?.genres]);

    const mediaType = searchParams.get('mediaType');

    const imageUrl = import.meta.env.VITE_TMDB_BASE_IMAGE_URL;

    useEffect(() => {

        if (!mediaType) return;

        const fetchMovie = async (endpoint, id, setter) => {
            try {
                const data = await getMovies(endpoint(id));
                setter(data);
            } catch {
                return;
            }
        }

        const fetchSimilar = async (endpoint, id, setter) => {
            try {
                const data = await getMovies(endpoint(id));
                setter(data.results);
            } catch {
                return;
            }
        }

        if (mediaType.toLowerCase() === 'movies') {
            fetchMovie(MoviesEndpoints.movieDetails, id, setDetails);
            fetchSimilar(MoviesEndpoints.similarMovies, id, setSimilar);
            fetchSimilar(MoviesEndpoints.recommendations, id, setRecommended);
        }
        else if (mediaType.toLowerCase() === 'tv-shows') {
            fetchMovie(TvShowsEndpoints.details, id, setDetails);
            fetchSimilar(TvShowsEndpoints.similar, id, setSimilar);
            fetchSimilar(TvShowsEndpoints.recommendations, id, setRecommended);
        }

    }, [id, mediaType]);

    useEffect(() => {
        console.log(details);
    }, [details]);

    const sections = [
        {
            id: 1,
            title: 'Similars',
            movies: similar || []
        },
        {
            id: 2,
            title: 'Recommended',
            movies: recommended || []
        }
    ];

    const getID = (id) => {
        navigate(`/home/movies/${id}?mediaType=${mediaType}`);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    if (!mediaType) return <Navigate to="/home" />;

    if (!details) return;

    return (
        <>
            {mediaType?.toLowerCase().trim() === 'movies' || mediaType?.toLowerCase().trim() === 'tv-shows' ?
                <div className=''>

                    <div className='relative z-30 w-full max-h-96 lg:hidden rounded-2xl overflow-hidden border border-border'>
                        <img
                            src={`${imageUrl}${details.backdrop_path}`}
                            alt='Backdrop Image'
                            className='w-full object-cover aspect-video' />

                        <div className='absolute top-0 left-0 w-full h-full bg-linear-to-t from-black/80 via-black/40 to-transparent z-50'></div>
                    </div>

                    <div className='flex flex-col sm:flex-row pl-3 gap-5 relative -top-15 lg:top-0 lg:mb-12 lg:pl-0 z-30'>
                        <img
                            src={`${imageUrl}${details.poster_path}`}
                            alt='Poster Image'
                            className='w-30 sm:w-36 md:w-42 lg:w-48 aspect-2/3 rounded-xl border border-border' />

                        <div className='flex flex-col justify-between gap-5'>

                            <div className=" text-secondary-text text-sm">
                                <h3 className='font-bold text-primary-text mb-2.5 text-lg sm:text-xl md:text-2xl lg:text-3xl'>
                                    {mediaType.toLowerCase() === 'movies' ?
                                        details.title
                                        : details.name}
                                </h3>

                                <div className='flex items-center gap-2 sm:text-lg md:text-xl lg:text-2xl'>
                                    <span>
                                        {mediaType.toLowerCase() === 'movies' ?
                                            new Date(details.release_date).getFullYear()
                                            : new Date(details.first_air_date).getFullYear()}
                                    </span>

                                    <GoDotFill className="text-secondary-text" />

                                    <div className="flex items-center gap-1">
                                        <span>{details.vote_average?.toFixed(1)}</span>

                                        <FaStar className="text-yellow-400 fill-yellow-400" />
                                    </div>

                                    <GoDotFill className="text-secondary-text" />

                                    <span className='capitalize'>{details.original_language}</span>

                                    {mediaType.toLowerCase() === 'tv-shows' ?
                                        <>
                                            <GoDotFill className="text-secondary-text" />
                                            <span className='capitalize'>
                                                {details.number_of_seasons}
                                                <span className='ml-2'>Seasons</span>
                                            </span>
                                        </>
                                        : null}

                                </div>

                            </div>

                            <p className='text-secondary-text sm:text-lg md:text-xl lg:text-2xl'>{details.tagline || 'No Tag Line.'}</p>

                            <div className='flex gap-2'>
                                <button className='text-primary-text flex items-center justify-center gap-2 bg-primary group hover:bg-card w-24 h-10 md:w-28 md:h-12 lg:w-36 lg:h-14 rounded-xl font-bold duration-300 sm:text-lg md:text-xl lg:text-2xl'>
                                    <Play className=' group-hover:text-primary duration-300' stroke="currentColor" />
                                    <span className=' group-hover:text-primary duration-300'>Watch</span>
                                </button>

                                <button className='text-yellow-400 hover:bg-hover duration-300 flex justify-center items-center gap-2 bg-card w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-xl font-bold sm:text-lg md:text-xl lg:text-2xl'>
                                    <Bookmark />
                                </button>

                                <button className='text-primary-text hover:bg-hover duration-300 flex justify-center items-center gap-2 bg-card w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-xl font-bold sm:text-lg md:text-xl lg:text-2xl'>
                                    <Heart />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col gap-10 md:gap-14'>
                        <div className='text-primary-text'>

                            <p className='text-primary-text font-bold  mb-2.5 sm:text-lg md:text-xl lg:text-2xl'>Categories</p>

                            {details?.genres?.length > 0 ?
                                <div className='flex flex-wrap items-center gap-2.5'>
                                    {details.genres.map((genre) => (
                                        <p
                                            key={genre.id}
                                            className='text-secondary-text block rounded-xl pl-2.5 pr-2.5 pt-1.5 pb-1.5 max-h-24 overflow-y-auto sm:text-lg md:text-xl lg:text-2xl'
                                            style={{ backgroundColor: genreColor[genre.id] }}>
                                            {genre.name}
                                        </p>
                                    ))}
                                </div>
                                : null}

                        </div>

                        <div className='text-primary-text'>

                            <p className='text-primary-text font-bold  mb-2.5 sm:text-lg md:text-xl lg:text-2xl'>Overview</p>

                            <p className='text-secondary-text block sm:text-lg md:text-xl lg:text-2xl'>
                                {details.overview}
                            </p>

                        </div>

                        <Content sections={sections} handleClick={getID} />
                    </div>

                </div>

                : <Navigate to='/home' />
            }
        </>
    )
}