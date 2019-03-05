import loadMovies from './movies-component.js';
import { updateSearchTerm } from './search-component.js';
import { readFromQuery } from './hash-query.js';

window.addEventListener('hashchange', () => {
    const query = window.location.hash.slice(1); //remove #
    const queryOptions = readFromQuery(query);
    console.log(queryOptions);
    updateSearchTerm(queryOptions.searchTerm);
});