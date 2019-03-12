import { auth, favoritesByUserRef } from '../firebase.js';
const PLACE_HOLDER = './assets/movie-placeholder.png';
const SPACE_HOLDER = '&nbsp;';

export function makeMovieCard(movie) {
    const poster = movie.poster_path 
        ? `https://image.tmdb.org/t/p/w92${movie.poster_path}`
        : PLACE_HOLDER;
    
    const release = movie.release_date.split('-')[0] || SPACE_HOLDER;

    const html = /*html*/`        
        <li class="movie" title="${movie.overview}">
            <span class="favorite">☆</span>
            <a href="./movie-detail.html?id=${movie.id}">
                <h2>${movie.title}</h2>
                <img src="${poster}">
                <span class="year">${release}</span>
            </a>
        </li>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const movieList = document.getElementById('movie-list');

export function updateMovies(movies) {
    clearMovies();

    movies.forEach(movie => {
        const dom = makeMovieCard(movie);
        const favoriteStar = dom.querySelector('.favorite');

        console.log('current user', auth.currentUser);
        const userId = auth.currentUser.uid;
        const userFavoritesRef = favoritesByUserRef.child(userId);
        const userFavoriteMovieRef = userFavoritesRef.child(movie.id);

        favoriteStar.addEventListener('click', () => {
            userFavoriteMovieRef.set({
                id: movie.id,
                title: movie.title,
                poster_path: movie.poster_path,
                overview: movie.overview,
                release_date: movie.release_date
            });

        });

        movieList.appendChild(dom);
    });
}

function clearMovies() {
    while(movieList.children.length > 0) {
        movieList.lastElementChild.remove();
    }
}

