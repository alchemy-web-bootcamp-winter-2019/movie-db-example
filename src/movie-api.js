const BASE_URL = 'https://api.themoviedb.org/3';
const SEARCH_MOVIE_URL = `${BASE_URL}/search/movie`;
const MOVIE_DETAIL_URL = `${BASE_URL}/movie`;
const API_KEY = 'a9c1c53b2d714000fd04fb94fe4ad651';

function setDefaultQueryParams(url) {
    url.searchParams.set('api_key', API_KEY);
    url.searchParams.set('language', 'en-US');
}

export function makeSearchMovieUrl(queryOptions) {
    const searchTerm = queryOptions.searchTerm;
    if(!searchTerm) {
        return '';
    }
    
    const url = new URL(SEARCH_MOVIE_URL);
    setDefaultQueryParams(url);
    url.searchParams.set('include_adult', false);
    url.searchParams.set('query', queryOptions.searchTerm);
    url.searchParams.set('page', queryOptions.page);
    return url.toString();
}

export function makeMovieDetailUrl(movieId) {
    const path = `${MOVIE_DETAIL_URL}/${movieId}`;
    const url = new URL(path);
    setDefaultQueryParams(url);
    return url.toString();
}
