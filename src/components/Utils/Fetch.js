
const API_KEY = '24311d063db73a68a48edf2f41d1e088'
const BASE_URL = 'https://api.themoviedb.org/3'

export async function fetchPopularMovies(){
    return await fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=1`)
    .then(resp => resp.json())
}

export async function fetchSearchMovies(input){
    return await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&
    language=en-US&page=1&include_adult=false&query=${input}`)
    .then(resp => resp.json())
}

export async function fetchMovieDetails(movie_id){
    return await fetch(`${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}&
    language=en-US`)
    .then(resp => resp.json())
}

export async function fetchMovieCast(movie_id){
    return await fetch(`${BASE_URL}/movie/${movie_id}/credits?api_key=${API_KEY}&
    language=en-US`)
    .then(resp => resp.json())
}

export async function fetchMovieReviews(movie_id){
    return await fetch(`${BASE_URL}/movie/${movie_id}/reviews?api_key=${API_KEY}&
    language=en-US&page=1`)
    .then(resp => resp.json())
}
