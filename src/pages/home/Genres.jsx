import { useState, useEffect, useMemo } from 'react';
import { toast } from "sonner";

import { getGenres } from '../../services/fetchGenres';
import GenresEndpoints from '../../api/Genres';

import Colors from '../../constants/Colors';

function getRandomColor(movGenres, tvGenres) {
    const obj = {};
    const allGenres = [...movGenres, ...tvGenres];

    allGenres.forEach(item => {
        obj[item.id] = Colors[item.id % Colors.length];
    });

    return obj;
}

function Genres() {
    const [genres, SetGenres] = useState({
        movieGenres: [],
        tvGenres: []
    });

    const sections = [
        {
            id: 1,
            title: 'Movie Categories',
            genres: genres.movieGenres || []
        },
        {
            id: 2,
            title: 'Tv Shows Categories',
            genres: genres.tvGenres || []
        }
    ];

    const colorObj = useMemo(() => (
        getRandomColor(genres.movieGenres, genres.tvGenres)
    ), [genres.movieGenres, genres.tvGenres]);

    useEffect(() => {
        const fetchGenres = async (endpoint, type) => {

            try {
                let genresData = await getGenres(endpoint);

                if (!genresData) throw new Error('Something went wrong.');

                SetGenres(prev => { return { ...prev, [type]: genresData.genres } });

            } catch (error) {
                toast.error(error.message);
            }
        }

        fetchGenres(GenresEndpoints.movieGenres, 'movieGenres');
        fetchGenres(GenresEndpoints.tvGenres, 'tvGenres');
    }, []);

    useEffect(() => {
        console.log(genres);
    }, [genres]);

    return (
        <div className='flex flex-col gap-8'>
            {sections.map(section => (
                <div
                    key={section.id}
                    className=''>

                    <h3 className='font-bold text-lg sm:text-2xl text-primary-text mb-5'>{section.title}</h3>

                    <div className='grid gap-4 grid-cols-[repeat(auto-fill,minmax(100px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(200px,1fr))]'>
                        {section.genres.length > 0 ?
                            section.genres.map(item => (
                                <div
                                    key={item.id}
                                    className='cursor-pointer pl-2 pr-2 h-20 rounded-xl flex items-center justify-center font-bold text-sm sm:text-lg text-primary-text border-2 border-border hover:scale-[0.9] duration-300'
                                    style={{ backgroundColor: colorObj[item.id] }}>
                                    {item.name}
                                </div>
                            ))
                            : null
                        }
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Genres;