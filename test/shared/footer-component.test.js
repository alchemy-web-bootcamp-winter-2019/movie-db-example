import { makeFooter } from '../../src/shared/footer-component.js';
const test = QUnit.test;

QUnit.module('footer component');

test('make footer', assert => {
    const dom = makeFooter();
    assert.htmlEqual(dom, /*html*/`
        <footer>
            <img src="https://www.themoviedb.org/assets/2/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg">
            This product uses the TMDb API but is not endorsed or certified by TMDb.
        </footer>
    `);
});