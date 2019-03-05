import { writeSearchToQuery } from './hash-query.js';
const searchForm = document.getElementById('search-form');
const searchTermInput = searchForm.querySelector('input');

searchForm.addEventListener('submit', event => {
    event.preventDefault();
    const searchTerm = searchTermInput.value;
    const existingQuery = window.location.hash.slice(1); // get rid of leading "#"
    const newQuery = writeSearchToQuery(existingQuery, searchTerm);
    window.location.hash = newQuery;
});

export function updateSearchTerm(searchTerm) {
    searchTermInput.value = searchTerm;
}