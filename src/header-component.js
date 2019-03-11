import { auth } from './firebase.js';

export function makeHeader() {
    const html = /*html*/`
        <header>
            <img src="assets/alchemy-logo.png" alt="Alchemy Code Lab Logo">
            <h1 class="header-title">Favorite Movies</h1>
        </header>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

export function makeProfile(user) {
    const avatar = user.photoURL || './assets/default-avatar.png';

    const html = /*html*/`
        <div class="profile">
            <img src="${avatar}">
            <span>${user.displayName}</span>
            <button>Sign Out</button>
        </div>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const headerContainer = document.getElementById('header-container');

export default function loadHeader(options) {
    const dom = makeHeader();
    // we must reference elements before adding dom to parent via appendChild
    const header = dom.querySelector('header');
    headerContainer.appendChild(dom);

    if(options && options.skipAuth) {
        return;
    }
    
    auth.onAuthStateChanged(user => {
        if(user) {
            // there is a user!
            const userDom = makeProfile(user);
            // reference elements _before_ appending dom
            const signOutButton = userDom.querySelector('button');
            signOutButton.addEventListener('click', () => {
                auth.signOut();
                window.location.hash = '';
            });
            header.appendChild(userDom);
        }
        else {
            // no user
            window.location = './auth.html' + window.location.hash;
        }
    });
}