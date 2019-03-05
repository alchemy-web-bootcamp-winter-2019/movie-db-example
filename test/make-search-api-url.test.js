import makeSearchAPIUrl from '../src/make-search-api-url.js';
const test = QUnit.test;

QUnit.module('make search url');

test('includes encoded search term, defaults to page 1', assert => {
    const queryOptions = {
        search: { term: 'star wars' }
    };

    const url = makeSearchAPIUrl(queryOptions);
    
    assert.equal(url, 'https://api.themoviedb.org/3/search/movie?api_key=a9c1c53b2d714000fd04fb94fe4ad651&language=en-US&query=star%20wars&page=1&include_adult=false');
});

test('includes encoded search term and page', assert => {
    const queryOptions = {
        search: { term: 'star wars' },
        paging: { page: 3 }
    };

    const url = makeSearchAPIUrl(queryOptions);
    
    assert.equal(url, 'https://api.themoviedb.org/3/search/movie?api_key=a9c1c53b2d714000fd04fb94fe4ad651&language=en-US&query=star%20wars&page=3&include_adult=false');
});

test('return empty string if no search', assert => {
    const queryOptions = {
        search: { term: '' }
    };

    const url = makeSearchAPIUrl(queryOptions);
    
    assert.equal(url, '');

});