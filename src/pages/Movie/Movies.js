import { useState, useEffect } from "react";
import { fetchSearchMovies } from "components/Utils/Fetch";
import {Link, useLocation, useSearchParams} from "react-router-dom"
import css from './Movie.module.css'
const Movies = () =>{ 
const [searchParams, setSearchParams] =useSearchParams();
const query = searchParams.get('query') ?? "";
const [movies, setMovies] = useState([]);
const [inputQuery, setInputQuery] = useState([])
const location = useLocation();
const [loading, setLoading] = useState(false);



useEffect(() => {
    console.log(query)
      if(query){
      fetchSearchMovies(query)
      .then((data => setMovies([...data.results])))  
      }
      return setMovies([]);
},[query]);

const handleChange = e => {
    const {value} = e.target;
    setInputQuery(value);
    }


const handleSubmit = async e => {
    e.preventDefault();
    if(inputQuery.trim() === ''){
         alert('Enter data')
         setMovies([])
         setSearchParams('')
        return 
    } 
    setSearchParams ({query: inputQuery});
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
       <form 
       onSubmit={handleSubmit}
       >
        <label> Enter data
            <input type="text" name="query" onChange={handleChange}
               autoComplete="off"
               autoFocus
               placeholder="Search Movies"
               value={inputQuery}></input>
        </label>
        <button type="submit"  >Find</button>
       </form>
       {loading && <div>Loading...</div>}
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

