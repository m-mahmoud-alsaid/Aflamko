import { useRef } from "react";

import { ChevronRight } from 'lucide-react';
import { ChevronLeft } from 'lucide-react';

import Button from '../../components/ui/Button'
import MoviePoster from '../../components/ui/MoviePoster'

function Content({ sections, handleClick }) {

    const sliderRefs = useRef([]);

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
        <div className='flex flex-col gap-5 md:gap-10'>

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
                            {section.movies.length > 0 ?
                                section.movies.map(movie => (
                                    <MoviePoster
                                        key={movie.id}
                                        posterPath={movie.poster_path}
                                        title={movie.title}
                                        onClick={() => handleClick(movie.id)} />
                                ))
                                :
                                <p className='text-primary-text'>No content to display.</p>
                            }
                        </div>

                        {section.movies.length > 0 ?
                            <>
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
                            </>
                            : null}

                    </div>

                </div>
            ))}

        </div>
    )
}

export default Content;