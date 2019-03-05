const PLACE_HOLDER = './assets/movie-placeholder.png';
export function makeMovieCard(movie) {
    const poster = movie.poster_path 
        ? `https://image.tmdb.org/t/p/w92${movie.poster_path}`
        : PLACE_HOLDER;

    const html = /*html*/`        
        <li class="movie" title="${movie.overview}">
            <h2>${movie.title}</h2>
            <img src="${poster}">
            <span class="year">${movie.release_date.split('-')[0]}</span>
        </li>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const movieList = document.getElementById('movie-list');

export default function loadMovies(movies) {
    clearMovies();

    movies.forEach(movie => {
        const dom = makeMovieCard(movie);
        movieList.appendChild(dom);
    });
}

function clearMovies() {
    while(movieList.children.length > 0) {
        movieList.lastElementChild.remove();
    }
}

