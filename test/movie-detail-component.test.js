import { makeMovieDetail } from '../src/movie-detail-component.js';
const test = QUnit.test;

QUnit.module('movie detail component');

test('makes movie detail', assert => {
    //arrange
    const movie = {
        'id': 11,
        'title': 'Star Wars',
        'backdrop_path': '/4iJfYYoQzZcONB9hNzg0J0wWyPH.jpg',
        'overview': 'Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.',
    };

    //act
    const dom = makeMovieDetail(movie);

    //assert
    assert.htmlEqual(dom, /*html*/`
        <article>
            <img src="https://image.tmdb.org/t/p/w300/4iJfYYoQzZcONB9hNzg0J0wWyPH.jpg">
            <h2>Star Wars</h2>
            <p class="description">Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.</p>
        </article>
    `);
});