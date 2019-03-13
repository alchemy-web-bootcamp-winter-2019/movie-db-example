import loadHeader from '../shared/header-component.js';
import loadFooter from '../shared/footer-component.js';
import { auth, favoritesByUserRef } from '../firebase.js';
import { updateMovies } from '../movies/movies-component.js';
import convertObjectToArray from '../convert-object-to-array.js';

loadHeader();
loadFooter();

auth.onAuthStateChanged(user => {
    const userId = user.uid;
    const userFavoritesRef = favoritesByUserRef.child(userId);

    userFavoritesRef.once('value')
        .then(snapshot => {
        const data = snapshot.val();
        const favoriteMovies = convertObjectToArray(data);
        updateMovies(favoriteMovies);
    });
});