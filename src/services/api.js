const baseUrl = import.meta.env.VITE_TMDB_BASE_URL;
const apiKey = import.meta.env.VITE_TMDB_API_KEY;

export default async function apiRequest(endpoint, options = {}) {

    const separator = endpoint.includes('?') ? '&' : '?';

    const response = await fetch(
        `${baseUrl}${endpoint}${separator}api_key=${apiKey}`,
        {
            headers: {
                accept: 'application/json',
                ...options.headers,
            },

            ...options,
        }
    );

    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }

    return await response.json();
}