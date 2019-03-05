const test = QUnit.test;

QUnit.module('make search movie url');

const SEARCH_MOVIE_URL = 'https://api.themoviedb.org/3/search/movie';
const API_KEY = 'a9c1c53b2d714000fd04fb94fe4ad651';

function makeSearchMovieUrl(queryOptions) {
    const url = new URL(SEARCH_MOVIE_URL);
    url.searchParams.set('api_key', API_KEY);
    url.searchParams.set('language', 'en-us');
    url.searchParams.set('include_adult', false);
    url.searchParams.set('query', queryOptions.searchTerm);
    url.searchParams.set('page', queryOptions.page);
    return url.toString();
}

test('includes query and page', assert => {
    //arrange
    const queryOptions = {
        searchTerm: 'star wars',
        page: 3
    };
    const expected = 'https://api.themoviedb.org/3/search/movie?api_key=a9c1c53b2d714000fd04fb94fe4ad651&language=en-us&include_adult=false&query=star+wars&page=3';

    //act
    const url = makeSearchMovieUrl(queryOptions);

    //assert
    assert.equal(url, expected);
});

// test('returns empty url if no searchTerm', assert => {

// });