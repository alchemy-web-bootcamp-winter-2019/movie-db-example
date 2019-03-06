import loadMovies from './movies-component.js';
import { updateSearchTerm } from './search-component.js';
import { updatePagingInfo } from './paging-component.js';
import { readFromQuery } from './hash-query.js';
import makeSearchMovieUrl from './make-search-movie-url.js';

window.addEventListener('hashchange', () => {
    const query = window.location.hash.slice(1); //remove #
    const queryOptions = readFromQuery(query);
    updateSearchTerm(queryOptions.searchTerm);

    const url = makeSearchMovieUrl(queryOptions);

    if(!url) {
        return;
        // TODO: reset movies and paging to hidden
    }

    fetch(url)
        .then(response => response.json())
        .then(body => {
            loadMovies(body.results);

            const pagingInfo = {
                page: body.page,
                totalPages: body.total_pages,
            };
            updatePagingInfo(pagingInfo);
        });
});