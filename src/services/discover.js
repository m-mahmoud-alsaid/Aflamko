import getData from './api';

export async function discover(endpoint) {
    return await getData(endpoint);
}