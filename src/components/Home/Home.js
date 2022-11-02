import { useState } from "react"
import {fetchPopularMovies} from "components/Utils/Fetch"


const Home = () =>{
const [movies, setMovies] = useState([])


fetchPopularMovies()
.then((data => setMovies([...data.results])))

console.log(movies)
return(
    <h2>Home</h2>
)
}

export default Home;