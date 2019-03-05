import { writeOptionsAsQuery, readQueryAsOptions } from '../src/query-options.js';
const test = QUnit.test;

QUnit.module('query options');

test('writes query search term', assert => {
    const queryOptions = { 
        search: { term: 'star wars' }
    };
    const query = writeOptionsAsQuery(queryOptions);
    assert.equal(query, '?searchTerm=star+wars');
});

test('writes query for search and paging', assert => {
    const queryOptions = {
        search: { term: 'star wars' },
        paging: { page: 1 }
    };
    const query = writeOptionsAsQuery(queryOptions);
    assert.equal(query, '?searchTerm=star+wars&page=1');
});

test('reads query with search term and page', assert => {
    const query = '?searchTerm=star+wars&page=1';
    const options = readQueryAsOptions(query);
    assert.deepEqual(options, {
        search: { term: 'star wars' },
        paging: { page: 1 }
    });
});

test('reads query with search term with no page', assert => {
    const query = '?searchTerm=star+wars';
    const options = readQueryAsOptions(query);
    assert.deepEqual(options, {
        search: { term: 'star wars' },
        paging: { page: 1 }
    });
});

test('reads empty query', assert => {
    const query = '';
    const options = readQueryAsOptions(query);
    assert.deepEqual(options, {
        search: { term: '' },
        paging: { page: 1 }
    });
});