const previousButton = document.getElementById('previous-button');
const nextButton = document.getElementById('next-button');
const currentPage = document.getElementById('current-page');
const totalPages = document.getElementById('total-pages');

const PER_PAGE = 20;

export default function loadPaging(totalCount, callback) {
    const totalPageCount = Math.ceil(totalCount / PER_PAGE);
    totalPages.textContent = totalPageCount;
    let currentPageNumber = 1;
    
    updatePaging();

    function updatePaging() {
        currentPage.textContent = currentPageNumber;
        nextButton.disabled = currentPageNumber === totalPageCount;
        previousButton.disabled = currentPageNumber === 1;

        const pagingOptions = {
            page: currentPageNumber,
            perPage: PER_PAGE
        };
        
        callback(pagingOptions);
    }

    nextButton.addEventListener('click', () => {
        currentPageNumber++;
        updatePaging();
    });

    previousButton.addEventListener('click', () => {
        currentPageNumber--;
        updatePaging();
    });

}