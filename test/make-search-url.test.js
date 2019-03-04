import makeSearchUrl from '../src/make-search-url.js';
const test = QUnit.test;

QUnit.module('make search url');

test('includes encoded search term', assert => {
    const searchOptions = {
        term: 'star wars'
    };

    const url = makeSearchUrl(searchOptions);

    assert.equal(url, 'https://api.themoviedb.org/3/search/movie?api_key=a9c1c53b2d714000fd04fb94fe4ad651&language=en-US&query=star%20wars&page=1&include_adult=false');
});