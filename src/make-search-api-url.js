const API_KEY = 'a9c1c53b2d714000fd04fb94fe4ad651';

export default function makeSearchAPIUrl(searchOptions) {
    const query = encodeURIComponent(searchOptions.term);
    const page = 1;
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`;
    return url;
}