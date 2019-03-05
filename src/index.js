import loadSearch from './search-component.js';
import loadMovies from './movies-component.js';
import makeSearchAPIUrl from './make-search-api-url.js';

loadSearch(searchOptions => {
    const url = makeSearchAPIUrl(searchOptions);
    
    fetch(url)
        .then(response => response.json())
        .then(response => {
            loadMovies(response.results);
        });
});
