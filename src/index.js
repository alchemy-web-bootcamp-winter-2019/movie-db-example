import loadSearch from './search-component.js';
import loadMovies from './movies-component.js';
import makeSearchUrl from './make-search-url.js';

loadSearch(searchOptions => {
    const url = makeSearchUrl(searchOptions);
    
    fetch(url)
        .then(response => response.json())
        .then(response => {
            loadMovies(response.results);
        });
});
