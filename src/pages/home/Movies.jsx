import { useState, useEffect, useRef } from "react";
import { toast } from "sonner";

// Components 
import Button from '../../components/ui/Button'
import MoviePoster from '../../components/ui/MoviePoster'

// Dealing With API 
import { getMovies } from '../../services/FetchMovies';
import MoviesEndpoints from '../../api/MoviesEndpoints';

// Icons 
import { ChevronRight } from 'lucide-react';
import { ChevronLeft } from 'lucide-react';

function Movies() {
    const [moviesList, setMoviesList] = useState([]);

    const sliderRefs = useRef([]);

    const sections = [
        {
            id: 1,
            title: 'Trending',
            movies: moviesList || []
        },
        {
            id: 2,
            title: 'Popular',
            movies: moviesList || []
        },
        {
            id: 3,
            title: 'Top Rated',
            movies: moviesList || []
        },
        {
            id: 4,
            title: 'Now Playing',
            movies: moviesList || []
        },
        {
            id: 5,
            title: 'Upcoming',
            movies: moviesList || []
        }
    ];

    useEffect(() => {

        const fetchMovies = async (url) => {

            try {
                let movies = await getMovies(url);

                if (!movies) {
                    toast.error('Failed to fetch movies.');
                    return;
                }

                setMoviesList(movies.results);
            } catch {
                return;
            }
        }

        fetchMovies(MoviesEndpoints.dayTrendingMovies);
    }, []);

    useEffect(() => {
        console.log(moviesList);
    }, [moviesList]);

    const prev = (slider) => {
        if (!slider) return;

        slider.scrollBy({
            left: -300,
            behavior: 'smooth'
        });
    };

    const next = (slider) => {
        if (!slider) return;

        slider.scrollBy({
            left: 300,
            behavior: 'smooth'
        });
    };

    return (
        <div className='flex flex-col gap-10'>

            {sections.map((section, index) => (
                <div key={section.id} className='relative'>

                    <div className='flex justify-between mb-5'>
                        <h2 className='text-white font-bold text-lg sm:text-2xl'>{section.title}</h2>
                        <Button txt='See All >' />
                    </div>

                    <div
                        className={`w-full overflow-x-auto hide-scrollbar `}
                        ref={(div => sliderRefs.current[index] = div)}>
                        <div className='flex flex-nowrap gap-5 transition-transform duration-300'>
                            {moviesList.length > 0 ?
                                moviesList.map(movie => (
                                    <MoviePoster
                                        key={movie.id}
                                        posterPath={movie.poster_path}
                                        title={movie.title} />
                                ))
                                : null}
                        </div>

                        <span
                            className='flex justify-center items-center cursor-pointer absolute top-1/2 right-3 -translate-y-1/2 bg-primary w-8 h-8 sm:w-12 sm:h-12 md:w-15 md:h-15 rounded-full group hover:bg-card duration-300'
                            onClick={() => next(sliderRefs.current[index])}>
                            <ChevronRight
                                className='text-primary-text group-hover:text-primary duration-300'
                                size={40} />
                        </span>

                        <span className='flex justify-center items-center cursor-pointer absolute top-1/2 left-3 -translate-y-1/2 bg-primary w-8 h-8 sm:w-12 sm:h-12 md:w-15 md:h-15 rounded-full group hover:bg-card duration-300'
                            onClick={() => prev(sliderRefs.current[index])}>
                            <ChevronLeft
                                className='text-primary-text group-hover:text-primary duration-300'
                                size={40} />
                        </span>
                    </div>

                </div>
            ))}

        </div>
    )
}

export default Movies