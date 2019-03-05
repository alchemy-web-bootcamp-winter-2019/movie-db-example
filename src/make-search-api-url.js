const SEARCH_MOVIE_URL = 'https://api.themoviedb.org/3/search/movie';
const API_KEY = 'a9c1c53b2d714000fd04fb94fe4ad651';

const url = new URL(SEARCH_MOVIE_URL);
url.searchParams.set('api_key', API_KEY);
url.searchParams.set('language', 'en-us');
url.searchParams.set('include_adult', false);

export default function makeSearchAPIUrl(queryOptions) {
    const searchOptions = queryOptions.search;
    const searchTerm = searchOptions.term;
    url.searchParams.set('query', searchTerm);
    
    const pagingOptions = queryOptions.paging;
    const page = pagingOptions ? pagingOptions.page : 1;
    url.searchParams.set('page', page);

    return searchTerm ? url.toString() : '';
}