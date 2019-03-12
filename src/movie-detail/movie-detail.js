import loadHeader from '../shared/header-component.js';
import loadFooter from '../shared/footer-component.js';
import loadMovieDetail from './movie-detail-component.js';
import { makeMovieDetailUrl } from '../movie-api.js';

loadHeader();
loadFooter();

const searchParams = new URLSearchParams(window.location.search);
const movieId = searchParams.get('id');

if(!movieId) {
    window.location = './';
}

const url = makeMovieDetailUrl(movieId);

fetch(url)
    .then(response => response.json())
    .then(body => {
        loadMovieDetail(body);
    });
