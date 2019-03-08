export function makeMovieDetail(movie) {
    const html = /*html*/`
        <article>
            <img src="https://image.tmdb.org/t/p/w300${movie.backdrop_path}">
            <h2>${movie.title}</h2>
            <p class="description">${movie.overview}</p>
        </article>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const detailContainer = document.getElementById('detail-container');

export default function loadMovieDetail(movie) {
    clearDetail();
    const dom = makeMovieDetail(movie);
    detailContainer.appendChild(dom);
}

function clearDetail() {
    while(detailContainer.children.length > 0) {
        detailContainer.lastElementChild.remove();
    }
}