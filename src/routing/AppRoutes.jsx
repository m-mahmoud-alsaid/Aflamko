import { Routes, Route, Navigate } from 'react-router-dom';

import NotFound from '../components/ui/NotFound';
import HomeMainContent from '../components/ui/HomeMainContent';

import Home from '../pages/home/Home';
import Movies from '../pages/home/Movies';
import TvShows from '../pages/home/TvShows';
import Genres from '../pages/home/Genres';

import MovieDetails from '../pages/home/MovieDetails';
import CategoryDiscover from '../pages/home/CategoryDiscover';

function AppRoutes() {

    return (
        <Routes>
            <Route path='/' element={<Navigate to='/home' />} />

            <Route path='/home' element={<Home />} >
                <Route index element={<HomeMainContent />} />

                <Route path='movies' element={<Movies />} />
                <Route path='movies/:id' element={<MovieDetails />} />

                <Route path='tv-shows' element={<TvShows />} />
                <Route path='tv-shows/:id' element={<MovieDetails />} />

                <Route path='genres' element={<Genres />} />
                <Route path='category-discover/:mediaType/:genreID' element={<CategoryDiscover />} />

            </Route>

            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

export default AppRoutes;