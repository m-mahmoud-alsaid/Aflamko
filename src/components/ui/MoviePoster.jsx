function MoviePoster({ posterPath, title }) {
    const imageUrl = import.meta.env.VITE_TMDB_BASE_IMAGE_URL;

    return (
        <div className='flex flex-col group cursor-pointer mb-5 min-w-25 sm:min-w-45 md:min-w-70 hover:scale-[0.9] duration-300'>

            <img
                className='rounded-2xl w-full object-cover aspect-2/3'
                src={`${imageUrl}${posterPath}`}
                alt={title} />

            <p className='text-white pt-4 pb-4 truncate group-hover:text-primary duration-300'>{title}</p>
        </div>
    )
}

export default MoviePoster;