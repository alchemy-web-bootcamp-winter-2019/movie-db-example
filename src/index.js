import loadMovies from './movies-component.js';
import { updateSearchTerm } from './search-component.js';
import { readFromQuery } from './hash-query.js';
import makeSearchMovieUrl from './make-search-movie-url.js';

window.addEventListener('hashchange', () => {
    const query = window.location.hash.slice(1); //remove #
    const queryOptions = readFromQuery(query);
    updateSearchTerm(queryOptions.searchTerm);

    const url = makeSearchMovieUrl(queryOptions);

    // TODO: guard against empty search
    // if(!url) {
    //     return;
    // }

    fetch(url)
        .then(response => response.json())
        .then(body => {
            loadMovies(body.results);
        });
});