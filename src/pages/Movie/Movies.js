import { useState, useEffect } from "react";
import { fetchSearchMovies } from "components/Utils/Fetch";
import { Link, useLocation, useSearchParams} from "react-router-dom"
import css from './Movie.module.css'
const Movies = () =>{ 
const [searchParams, setSearchParams] =useSearchParams();
const query = searchParams.get('query') ?? "";
const [movies, setMovies] = useState([])
const location = useLocation();
const [loading, setLoading] = useState(false);


useEffect(() => {
    if (!query) {
        setMovies([]);
        return 
      }
      fetchSearchMovies(query)
      .then((data => setMovies([...data.results])))  
},[query]);

const handleChange = e => {
    if(e.currentTarget.value === ""){ return setSearchParams({})}
    setSearchParams ({query: e.currentTarget.value}) ;
    }

const handleSubmit = async e => {
    e.preventDefault();
    if(query.trim() === ''){
        
        alert('Enter data')
        return 
    } 
    try{
            const data = await  fetchSearchMovies(query)
            setMovies([...data.results])
        }
     catch (error){}
     finally {
        setLoading(false);
      }
    }
 

    return(
        <>
       <h2 className={css.title}>Movies</h2>
       <form onSubmit={handleSubmit}>
        <label> Enter data
            <input type="text" onChange={handleChange}
            value={query} ></input>
        </label>
        <button type="submit"  >Find</button>
       </form>
       <ul>
        {loading && <div>Loading...</div>}
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