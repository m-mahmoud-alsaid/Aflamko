import getData from './api';

export async function getMovies(endpoint) {
    return await getData(endpoint);
}