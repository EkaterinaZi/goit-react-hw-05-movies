import { useState, useEffect } from "react"
import {fetchPopularMovies} from "components/Utils/Fetch"
import { NavLink, useLocation } from "react-router-dom"
import css from './Home.module.css'

const Home = () =>{
const [movies, setMovies] = useState([])
const location = useLocation();
useEffect(() => {
    fetchPopularMovies()
    .then((data => setMovies([...data.results])))  
},[])


return(
    <>
    <h2 className={css.title}>Trending now</h2>
    <ul>
    {movies.map(({id, title}) => <li key={id}>
        <NavLink to={`movies/${id}`} state={{from: location}} className={css.movie}>{title}</NavLink>
    </li>)}
    </ul>
    </>
)
}

export default Home;