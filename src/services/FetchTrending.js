import getData from './api';

export async function getTrending(endpoint) {
    return await getData(endpoint);
}