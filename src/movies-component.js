export function makeMovieCard(movie) {
    const html = /*html*/`        
        <li class="movie" title="${movie.overview}">
            <h2>${movie.title}</h2>
            <img src="https://image.tmdb.org/t/p/w92${movie.poster_path}">
            <span class="year">${movie.release_date.split('-')[0]}</span>
        </li>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const movieList = document.getElementById('movie-list');

export default function loadMovies(movies) {
    movies.forEach(movie => {
        const dom = makeMovieCard(movie);
        movieList.appendChild(dom);
    });
}
