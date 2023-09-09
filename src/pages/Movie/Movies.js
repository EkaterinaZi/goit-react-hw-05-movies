import { useState, useEffect } from "react";
import { fetchSearchMovies } from "components/Utils/Fetch";
import { Link, useLocation, useSearchParams} from "react-router-dom"
import css from './Movie.module.css'
const Movies = () =>{ 
const [searchParams, setSearchParams] =useSearchParams();
const movieId = searchParams.get('movieId') ?? "";

const [movies, setMovies] = useState([])
const location = useLocation();

useEffect(() => {
    if(!movieId){
        return
    }
    fetchSearchMovies(movieId)
    .then((data => setMovies([...data.results])))
},[movieId])



const handleChange = e => {
    if(e.currentTarget.value === ""){ return setSearchParams({})}
    setSearchParams({movieId: e.currentTarget.value});
    }

const handleSubmit = e => {
    e.preventDefault();
    if(movieId.trim() === ''){
        alert('Enter data')
        return
    }
    setMovies('')
}

    return(
        <>
       <h2 className={css.title}>Movies</h2>
       <form onSubmit={handleSubmit}>
        <label> Enter data
            <input type="text" 
            value={movieId} onChange={handleChange} ></input>
        </label>
       </form>
       <ul>
      {movies.map(({id, title}) => {
        return ( 
        <li key={id}>
            <Link to={`${id}`} state={{from: location}} className={css.movie}>{title}</Link>
        </li>
         );
        })}
       </ul>

       </>   
       )
    }
    
    export default Movies;