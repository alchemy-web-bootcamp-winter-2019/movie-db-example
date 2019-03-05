import loadSearch from './search-component.js';
import loadMovies from './movies-component.js';
import makeSearchAPIUrl from './make-search-api-url.js';
import { writeOptionsAsQuery, readQueryAsOptions } from './query-options.js';

let searchOptions = null;



loadSearch(newSearchOptions => {
    searchOptions = newSearchOptions;
    const queryOptions = {
        search: searchOptions
    };
    const query = writeOptionsAsQuery(queryOptions);
    window.location.hash = query;
});

window.addEventListener('hashchange', () => {
    const query = window.location.hash.slice(1);
    const queryOptions = readQueryAsOptions(query);

    const url = makeSearchAPIUrl(queryOptions);
    
    fetch(url)
        .then(response => response.json())
        .then(response => {
            loadMovies(response.results);
        });
});
