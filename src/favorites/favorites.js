import loadHeader from '../shared/header-component.js';
import loadFooter from '../shared/footer-component.js';
import { updateMovies } from '../movies/movies-component.js';
import { auth, favoritesByUserRef } from '../firebase.js';
import convertObjectToArray from '../convert-object-to-array.js';

loadHeader();
loadFooter();

auth.onAuthStateChanged(user => {
    const userFavoritesRef = favoritesByUserRef.child(user.uid);
    userFavoritesRef.on('value', snapshot => {
        const value = snapshot.val();
        const movies = convertObjectToArray(value);
        updateMovies(movies);
    });
});
