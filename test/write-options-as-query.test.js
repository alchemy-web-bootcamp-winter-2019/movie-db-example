import writeOptionsAsQuery from '../src/write-options-as-query.js';
const test = QUnit.test;

QUnit.module('write options to hash');

test('makes query search term', assert => {
    const searchOptions = { term: 'star wars' };
    const query = writeOptionsAsQuery(searchOptions);
    assert.equal(query, '?searchTerm=star+wars');
});

test('makes query for search and paging', assert => {
    const searchOptions = { term: 'star wars' };
    const pagingOptions = { page: 1 };
    const query = writeOptionsAsQuery(searchOptions, pagingOptions);
    assert.equal(query, '?searchTerm=star+wars&page=1');
});