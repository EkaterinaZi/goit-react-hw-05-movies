
const API_KEY = '24311d063db73a68a48edf2f41d1e088'
const BASE_URL = 'https://api.themoviedb.org/3'

export async function fetchPopularMovies(){
    return await fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`)
    .then(resp => resp.json())
}

export async function fetchSearchMovies(input){
    return await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&
    language=en-US&page=1&include_adult=false&query=${input}`)
    .then(resp => resp.json())
}

