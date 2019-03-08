const SEARCH_MOVIE_URL = 'https://api.themoviedb.org/3/search/movie';
const API_KEY = 'a9c1c53b2d714000fd04fb94fe4ad651';

export function makeSearchMovieUrl(queryOptions) {
    const searchTerm = queryOptions.searchTerm;
    if(!searchTerm) {
        return '';
    }
    
    const url = new URL(SEARCH_MOVIE_URL);
    url.searchParams.set('api_key', API_KEY);
    url.searchParams.set('language', 'en-us');
    url.searchParams.set('include_adult', false);
    url.searchParams.set('query', queryOptions.searchTerm);
    url.searchParams.set('page', queryOptions.page);
    return url.toString();
}
