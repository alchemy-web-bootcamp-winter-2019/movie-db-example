const config = {
    apiKey: 'AIzaSyC8RBblrwHfd4dt_hfpSCc6ujYj-T_LWe4',
    authDomain: 'user-demo-c6218.firebaseapp.com',
    databaseURL: "https://user-demo-c6218.firebaseio.com",
    projectId: "user-demo-c6218",
};

firebase.initializeApp(config);

export const auth = firebase.auth();

const db = firebase.database();

export const usersRef = db.ref('users');

export const favoritesByUserRef = db.ref('favorites-by-user');