export function makeMovieDetail(movie) {
    const html = /*html*/`
        <article>
            <img src="https://image.tmdb.org/t/p/w300${movie.backdrop_path}">
            <h2>${movie.title}</h2>
            <p>${movie.tagline}</p>
            <p class="description">${movie.overview}</p>
            <button class="favorite">Add To Favorites</button>
        </article>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const detailContainer = document.getElementById('detail-container');

export default function loadMovieDetail(movie, favoriteCallback) {
    clearDetail();
    const dom = makeMovieDetail(movie);
    const favoriteButton = dom.querySelector('button.favorite');
    favoriteButton.addEventListener('click', () => {
        favoriteCallback(movie.id);
    });
    detailContainer.appendChild(dom);
}

function clearDetail() {
    while(detailContainer.children.length > 0) {
        detailContainer.lastElementChild.remove();
    }
}