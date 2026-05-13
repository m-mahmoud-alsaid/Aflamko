import { Routes, Route, Navigate } from 'react-router-dom';

import NotFound from '../components/ui/NotFound'
import Home from '../pages/home/Home';
import Movies from '../pages/home/Movies';
import TvShows from '../pages/home/TvShows';
import Genres from '../pages/home/Genres';

function AppRoutes() {

    return (
        <Routes>
            <Route path='/' element={<Navigate to='/home' />} />

            <Route path='/home' element={<Home />} >
                <Route path='movies' element={<Movies />} />
                <Route path='tv-shows' element={<TvShows />} />
                <Route path='genres' element={<Genres />} />
            </Route>

            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

export default AppRoutes;