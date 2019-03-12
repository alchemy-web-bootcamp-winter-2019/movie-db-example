export function makeMovieDetail(movie) {
    const html = /*html*/`
        <article>
            <img src="https://image.tmdb.org/t/p/w780${movie.backdrop_path}">
            <h2>${movie.title}</h2>
            <p>${movie.tagline}</p>
            <p class="description">${movie.overview}</p>
        </article>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const main = document.querySelector('main');

export default function loadMovieDetail(movie) {
    const dom = makeMovieDetail(movie);
    main.appendChild(dom);
}