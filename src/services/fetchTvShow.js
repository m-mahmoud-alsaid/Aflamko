import getData from './api';

export async function getTvShows(endpoint) {
    return await getData(endpoint);
}