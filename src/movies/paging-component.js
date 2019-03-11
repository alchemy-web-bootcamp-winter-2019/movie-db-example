import { writePageToQuery } from './hash-query.js';

const previousButton = document.getElementById('previous-button');
const nextButton = document.getElementById('next-button');
const currentPage = document.getElementById('current-page');
const totalPages = document.getElementById('total-pages');

let currentPageNumber = 1;

export function updatePagingInfo(pagingInfo) {
    currentPageNumber = pagingInfo.page;
    currentPage.textContent = currentPageNumber;
    totalPages.textContent = pagingInfo.totalPages;
    nextButton.disabled = currentPageNumber === pagingInfo.totalPages;
    previousButton.disabled = currentPageNumber === 1;
}

function updateQuery() {
    const existingQuery = window.location.hash.slice(1); // get rid of leading "#"
    const newQuery = writePageToQuery(existingQuery, currentPageNumber);
    window.location.hash = newQuery;
}

nextButton.addEventListener('click', () => {
    currentPageNumber++;
    updateQuery();
});

previousButton.addEventListener('click', () => {
    currentPageNumber--;
    updateQuery();
});