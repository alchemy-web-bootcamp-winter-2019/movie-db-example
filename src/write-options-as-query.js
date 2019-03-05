
export default function writeOptionsAsQuery(searchOptions, pagingOptions) {
    if(!searchOptions.term) {
        return '';
    }
    
    const searchParams = new URLSearchParams();
    searchParams.set('searchTerm', searchOptions.term);
    if(pagingOptions) {
        searchParams.set('page', pagingOptions.page);
    }

    return '?' + searchParams.toString();
}
