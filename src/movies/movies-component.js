const PLACE_HOLDER = './assets/movie-placeholder.png';
const SPACE_HOLDER = '&nbsp;';

export function makeMovieCard(movie) {
    const poster = movie.poster_path 
        ? `https://image.tmdb.org/t/p/w92${movie.poster_path}`
        : PLACE_HOLDER;
    
    const release = movie.release_date.split('-')[0] || SPACE_HOLDER;

    const html = /*html*/`        
        <li class="movie" title="${movie.overview}">
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
        movieList.appendChild(dom);
    });
}

function clearMovies() {
    while(movieList.children.length > 0) {
        movieList.lastElementChild.remove();
    }
}

