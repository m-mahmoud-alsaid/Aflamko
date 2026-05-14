const baseUrl = import.meta.env.VITE_TMDB_BASE_URL;
const apiKey = import.meta.env.VITE_TMDB_API_KEY;

export async function getTvShows(url) {
    try {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json'
            }
        };

        let response = await fetch(`${baseUrl}${url}?api_key=${apiKey}`, options);

        if (!response.ok) throw new Error('Failed to fetch movies.');

        let movies = await response.json();
        return movies;

    } catch (err) {
        return err;
    }
}