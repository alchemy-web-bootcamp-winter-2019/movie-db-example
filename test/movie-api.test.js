import { makeSearchMovieUrl } from '../src/movie-api.js';
const test = QUnit.test;

QUnit.module('make search movie url');

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

test('returns empty url if no searchTerm', assert => {
    //arrange
    const queryOptions = {
        searchTerm: '',
        page: 1
    };
    const expected = '';

    //act
    const url = makeSearchMovieUrl(queryOptions);

    //assert
    assert.equal(url, expected);
});