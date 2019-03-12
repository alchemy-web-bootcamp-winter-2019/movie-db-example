import loadHeader from '../shared/header-component.js';
import { auth, usersRef } from '../firebase.js';

// don't load up profile and do auth check on this auth.html page
const options = { skipAuth: true };
loadHeader(options);

const ui = new firebaseui.auth.AuthUI(auth);

// first param is id of element that will host the sign ui
// second param is list of options
ui.start('#firebaseui-auth-container', {
    // "providers" - how is user allowed to log in?
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID
    ],
    // where do we go on success?
    signInSuccessUrl: './' + window.location.hash,
    // don't show google account chooser
    credentialHelper: firebaseui.auth.CredentialHelper.NONE,
    callbacks: {
        signInSuccessWithAuthResult(authResult) {
            const user = authResult.user;
            usersRef.child(user.uid)
                .set({
                    uid: user.uid,
                    displayName: user.displayName,
                    photoURL: user.photoURL
                });
            return true;
        }
    }
});
