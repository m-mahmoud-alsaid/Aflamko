import { Play } from 'lucide-react';

function MoviePoster({ posterPath, title, onClick }) {
    const imageUrl = import.meta.env.VITE_TMDB_BASE_IMAGE_URL;

    return (
        <div onClick={onClick} className='flex flex-col group cursor-pointer mb-5 group min-w-25 sm:min-w-45 md:min-w-70 hover:scale-[0.9] duration-300'>

            <div className='relative group'>
                <img
                    className='rounded-2xl w-full object-cover aspect-2/3 group-hover:grayscale duration-300'
                    src={`${imageUrl}${posterPath}`}
                    alt={title} />

                <Play
                    className='hidden group-hover:block w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 duration-300 absolute top-1/2 -translate-1/2 left-1/2 text-primary'
                    fill="currentColor"
                    strokeWidth={1}
                    stroke="black" />
            </div>

            <p className='text-white pt-4 pb-4 truncate group-hover:text-primary duration-300'>{title}</p>


        </div>
    )
}

export default MoviePoster;