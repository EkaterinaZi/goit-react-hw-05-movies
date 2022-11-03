import { useState, useEffect } from "react";
import { fetchSearchMovies } from "components/Utils/Fetch";
import { Link, useLocation} from "react-router-dom"
const Movies = () =>{ 
const [input, setInput] = useState('')
const [movies, setMovies] = useState([])
const location = useLocation();
useEffect(() => {
    if(!input){
        return
    }
    fetchSearchMovies(input)
    .then((data => setMovies([...data.results])))
},[input])


const handleChange = e => {
    setInput(e.currentTarget.value.toLowerCase())
}
const handleSubmit = e => {
    e.preventDefault();
    if(input.trim() === ''){
        alert('Enter data')
        return
    }
    setInput('')
}

    return(
        <>
       <h2>Movies</h2>
       <form onSubmit={handleSubmit}>
        <label> Enter data
            <input onChange={handleChange}></input>
        </label>
       </form>
       <ul>
       {movies.map(({id, title}) => <li key={id}><Link to={`${id}`} state={{from: location}}>{title}</Link>
    </li>)}
       </ul>

       </>   
       )
    }
    
    export default Movies;