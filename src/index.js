import loadMovies from './movies-component.js';

const API_KEY = 'a9c1c53b2d714000fd04fb94fe4ad651';
const query = encodeURIComponent('Star Wars');
const page = 1;
const URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`;

fetch(URL)
    .then(response => response.json())
    .then(response => {
        loadMovies(response.results);
    });