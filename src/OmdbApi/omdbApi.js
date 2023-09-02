
export function SearchMovie (term) {
    return `https://www.omdbapi.com/?apiKey=${import.meta.env.VITE_APP_ID}&s=${term}`
}

export function SearchMovieById (movieId) {
    return `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_APP_ID}&i=${movieId}`
}