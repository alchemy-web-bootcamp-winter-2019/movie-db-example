import { makeMovieCard } from '../../src/movies/movies-component.js';
const test = QUnit.test;

QUnit.module('movies component');

test('make movie card', assert => {
    const movie = {
        'id': 11,
        'title': 'Star Wars',
        'poster_path': '/btTdmkgIvOi0FFip1sPuZI2oQG6.jpg',
        'original_language': 'en',
        'original_title': 'Star Wars',
        'genre_ids': [
            12,
            28,
            878
        ],
        'overview': 'Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.',
        'release_date': '1977-05-25'
    };

    const dom = makeMovieCard(movie);

    assert.htmlEqual(dom, /*html*/`
        <li class="movie" title="Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.">
            <span class="favorite-star">☆</span>    
            <a href="./movie-detail.html?id=11">
                <h2>Star Wars</h2>
                <img src="https://image.tmdb.org/t/p/w92/btTdmkgIvOi0FFip1sPuZI2oQG6.jpg">
                <span class="year">1977</span>
            </a>
        </li>
    `);
});

test('make movie card no poster', assert => {
    const movie = {
        'id': 11,
        'title': 'Star Wars',
        'poster_path': null,
        'overview': 'Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.',
        'release_date': '1977-05-25'
    };

    const dom = makeMovieCard(movie);

    assert.htmlEqual(dom, /*html*/`
        <li class="movie" title="Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.">
            <span class="favorite-star">☆</span>    
            <a href="./movie-detail.html?id=11">
                <h2>Star Wars</h2>
                <img src="./assets/movie-placeholder.png">
                <span class="year">1977</span>
            </a>
        </li>
    `);
});