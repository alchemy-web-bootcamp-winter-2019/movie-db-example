import { writeSearchToQuery, writePageToQuery, readFromQuery } from '../../src/movies/hash-query.js';
const test = QUnit.test;

QUnit.module('hash query');

test('write search to empty query', assert => {
    //arrange
    const existingQuery = '';
    const searchTerm = 'star wars';
    //act
    const query = writeSearchToQuery(existingQuery, searchTerm);
    //assert 
    assert.equal(query, 'searchTerm=star+wars&page=1');
});

test('write search to existing query changes search and resets page', assert => {
    //arrange
    const existingQuery = 'searchTerm=star+wars&page=3';
    const searchTerm = 'harry potter';
    //act
    const query = writeSearchToQuery(existingQuery, searchTerm);
    //assert 
    assert.equal(query, 'searchTerm=harry+potter&page=1');
});

test('write page to existing query', assert => {
    //arrange
    const existingQuery = 'searchTerm=star+wars&page=1';
    const page = 3;
    const expected = 'searchTerm=star+wars&page=3';
    //act 
    const query = writePageToQuery(existingQuery, page);
    //assert
    assert.equal(query, expected);
});

test('reads options from query', assert => {
    //arrange
    const query = 'searchTerm=star+wars&page=3';
    const expected = {
        searchTerm: 'star wars',
        page: 3  //note data type!
    };
    //act
    const queryOptions = readFromQuery(query);
    //assert
    assert.deepEqual(queryOptions, expected);
});