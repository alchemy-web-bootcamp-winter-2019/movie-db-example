import { makeMovieDetail } from '../../src/movie-detail/movie-detail-component.js';
const test = QUnit.test;

QUnit.module('movie detail component');

test('makes movie detail', assert => {
    //arrange
    const movie = {
        'adult': false,
        'backdrop_path': '/4iJfYYoQzZcONB9hNzg0J0wWyPH.jpg',
        'belongs_to_collection': {
            'id': 10,
            'name': 'Star Wars Collection',
            'poster_path': '/iTQHKziZy9pAAY4hHEDCGPaOvFC.jpg',
            'backdrop_path': '/d8duYyyC9J5T825Hg7grmaabfxQ.jpg'
        },
        'budget': 11000000,
        'genres': [
            {
                'id': 12,
                'name': 'Adventure'
            },
            {
                'id': 28,
                'name': 'Action'
            },
            {
                'id': 878,
                'name': 'Science Fiction'
            }
        ],
        'homepage': 'http://www.starwars.com/films/star-wars-episode-iv-a-new-hope',
        'id': 11,
        'imdb_id': 'tt0076759',
        'original_language': 'en',
        'original_title': 'Star Wars',
        'overview': 'Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.',
        'popularity': 35.411,
        'poster_path': '/btTdmkgIvOi0FFip1sPuZI2oQG6.jpg',
        'production_companies': [
            {
                'id': 1,
                'logo_path': '/o86DbpburjxrqAzEDhXZcyE8pDb.png',
                'name': 'Lucasfilm',
                'origin_country': 'US'
            },
            {
                'id': 25,
                'logo_path': '/qZCc1lty5FzX30aOCVRBLzaVmcp.png',
                'name': '20th Century Fox',
                'origin_country': 'US'
            }
        ],
        'production_countries': [
            {
                'iso_3166_1': 'US',
                'name': 'United States of America'
            }
        ],
        'release_date': '1977-05-25',
        'revenue': 775398007,
        'runtime': 121,
        'spoken_languages': [
            {
                'iso_639_1': 'en',
                'name': 'English'
            }
        ],
        'status': 'Released',
        'tagline': 'A long time ago in a galaxy far, far away...',
        'title': 'Star Wars',
        'video': false,
        'vote_average': 8.2,
        'vote_count': 10895
    };

    //act
    const dom = makeMovieDetail(movie);

    //assert
    assert.htmlEqual(dom, /*html*/`
        <article>
            <img src="https://image.tmdb.org/t/p/w780/4iJfYYoQzZcONB9hNzg0J0wWyPH.jpg">
            <h2>Star Wars</h2>
            <p>A long time ago in a galaxy far, far away...</p>
            <p class="description">Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.</p>
        </article>
    `);
});