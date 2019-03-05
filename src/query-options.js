
export function writeOptionsAsQuery(queryOptions) {
    const searchOptions = queryOptions.search;
    if(!searchOptions || !searchOptions.term) {
        return '';
    }
    
    const searchParams = new URLSearchParams();
    searchParams.set('searchTerm', searchOptions.term);
    
    const pagingOptions = queryOptions.paging;
    if(pagingOptions) {
        searchParams.set('page', pagingOptions.page);
    }

    return '?' + searchParams.toString();
}

export function readQueryAsOptions(query) {
    const searchParams = new URLSearchParams(query);
    const searchTerm = searchParams.get('searchTerm');
    const page = parseInt(searchParams.get('page'));

    const queryOptions = {
        search: { 
            term: searchTerm || ''
        },
        paging: {
            page: page || 1
        }
    };
    
    return queryOptions;
}

