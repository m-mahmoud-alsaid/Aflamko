import getData from './api';

export async function getGenres(endpoint) {
    return await getData(endpoint);
}