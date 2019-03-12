import { makeSearchMovieUrl, makeMovieDetailUrl } from '../../src/movie-api.js';
const test = QUnit.test;

QUnit.module('movie api');

test('search movie includes query and page', assert => {
    //arrange
    const queryOptions = {
        searchTerm: 'star wars',
        page: 3
    };
    const expected = 'https://api.themoviedb.org/3/search/movie?api_key=a9c1c53b2d714000fd04fb94fe4ad651&language=en-US&include_adult=false&query=star+wars&page=3';

    //act
    const url = makeSearchMovieUrl(queryOptions);

    //assert
    assert.equal(url, expected);
});

test('search movie returns empty url if no searchTerm', assert => {
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

test('movie detail uses movie id', assert => {
    //arrange
    const movieId = 11;
    const expected = 'https://api.themoviedb.org/3/movie/11?api_key=a9c1c53b2d714000fd04fb94fe4ad651&language=en-US';
    
    //act
    const url = makeMovieDetailUrl(movieId);

    //assert
    assert.equal(url, expected);
});