const searchForm = document.getElementById('search-form');
const searchTermInput = searchForm.querySelector('input');


export default function loadSearch(callback) {
    searchForm.addEventListener('submit', event => {
        event.preventDefault();
        
        const searchTerm = searchTermInput.value;

        if(searchTerm.trim() === '') {
            return;
        }

        const searchOptions = {
            term: searchTerm
        };

        callback(searchOptions);
    });
}

export function updateSearchTerm(searchOptions) {
    searchTermInput.value = searchOptions.term;
}