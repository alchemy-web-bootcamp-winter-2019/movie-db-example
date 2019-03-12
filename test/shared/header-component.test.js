import { makeHeader, makeProfile } from '../../src/shared/header-component.js';
const test = QUnit.test;

QUnit.module('header component');

test('make header', assert => {
    const dom = makeHeader();
    assert.htmlEqual(dom, /*html*/`
        <header>
            <img src="assets/alchemy-logo.png" alt="Alchemy Code Lab Logo">
            <h1 class="header-title">Favorite Movies</h1>
        </header>
    `);
});

test('make profile', assert => {
    // arrange
    const user = {
        displayName: 'Marty Nelson',
        photoURL: 'https://lh5.googleusercontent.com/-EnRNBAYvURk/AAAAAAAAAAI/AAAAAAAAAK8/cMJNFAVX5SE/photo.jpg'
    };

    const expected = /*html*/`
        <div class="profile">
            <img src="https://lh5.googleusercontent.com/-EnRNBAYvURk/AAAAAAAAAAI/AAAAAAAAAK8/cMJNFAVX5SE/photo.jpg">
            <span>Marty Nelson</span>
            <button>Sign Out</button>
        </div>
    `;

    //act
    const dom = makeProfile(user);

    //assert
    assert.htmlEqual(dom, expected);
});

test('make profile with default avatar', assert => {
    const user = {
        displayName: 'Marty Nelson',
        photoURL: null
    };

    const expected = /*html*/`
        <div class="profile">
            <img src="./assets/default-avatar.png">
            <span>Marty Nelson</span>
            <button>Sign Out</button>
        </div>
    `;

    //act
    const dom = makeProfile(user);

    //assert
    assert.htmlEqual(dom, expected);
});
