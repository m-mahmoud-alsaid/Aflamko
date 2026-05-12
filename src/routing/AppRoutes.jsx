import { Routes, Route } from 'react-router-dom'

import Home from '../pages/home/Home'
import Movies from '../pages/home/Movies'
import TvShows from '../pages/home/TvShows'
import Genres from '../pages/home/Genres'

function AppRoutes() {

    return (
        <Routes>
            <Route path='/' element={<Home />} >
                <Route path='/movies' element={<Movies />} />
                <Route path='/tv-shows' element={<TvShows />} />
                <Route path='/genres' element={<Genres />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes