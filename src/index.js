import loadSearch, { updateSearchTerm } from './search-component.js';
import loadPaging, { updatePagingInfo } from './paging-component.js';
import loadMovies from './movies-component.js';
import makeSearchAPIUrl from './make-search-api-url.js';
import { writeOptionsAsQuery, readQueryAsOptions } from './query-options.js';

let searchOptions = null;
let pagingOptions = null;

function writeQueryOptionsToHash() {
    const queryOptions = {
        search: searchOptions,
        paging: pagingOptions
    };
    const query = writeOptionsAsQuery(queryOptions);
    window.location.hash = query;
}

loadSearch(newSearchOptions => {
    searchOptions = newSearchOptions;
    pagingOptions = { page: 1 };
    writeQueryOptionsToHash();
});

loadPaging(newPagingOptions => {
    pagingOptions = newPagingOptions;
    writeQueryOptionsToHash();
});

window.addEventListener('hashchange', () => {
    runSearchFromQuery();
});

// run on load
runSearchFromQuery();

function runSearchFromQuery() {
    const query = window.location.hash.slice(1);
    const queryOptions = readQueryAsOptions(query);
    searchOptions = queryOptions.search;
    pagingOptions = queryOptions.paging;

    const url = makeSearchAPIUrl(queryOptions);
    
    updateSearchTerm(searchOptions);

    if(!url) {
        return;
        // TODO: clear movies component
    }
    
    fetch(url)
        .then(response => response.json())
        .then(response => {
            loadMovies(response.results);
            const pagingInfo = {
                page: response.page,
                totalPages: response.total_pages,
            };
            updatePagingInfo(pagingInfo);
        });
}

