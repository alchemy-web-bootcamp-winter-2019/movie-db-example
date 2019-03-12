Movie Favorites Demo
===

## Part 1

Agenda:

1. Setup firebase database
    * Add rules for authed users
        ```
        {
            "rules": {
                ".read": "auth != null",
                ".write": "auth != null"
            }
        }
        ```
    * Add info to `firebase.js`
    * Export refs
1. Add movie as user favorite
1. Don't load search until user is ready (.onAuthStateChanged)  
1. Read movie as user favorites
1. Remove movie as user favorite

## Part 2

1. Read user favorites
1. Transform to array
1. Reuse movies component to display

## Bonus

1. Preserve hash on sign in