import { useState } from "react";
import { fetchSearchMovies } from "components/Utils/Fetch";
const Movies = () =>{ 
const [input, setInput] = useState('')
const [setMovies] = useState([])

const handleChange = e => {
    setInput(e.currentTarget.value.toLowerCase())
}
const handleSubmit = e => {
    e.preventDefault();
    if(input.trim() === ''){
        alert('Enter data')
        return
    }
    fetchSearchMovies(input)
    .then((data => setMovies([...data.results])))
    console.log(input)
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
       </>   
       )
    }
    
    export default Movies;