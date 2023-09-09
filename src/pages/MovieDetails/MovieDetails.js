
import {Link, Outlet, useLocation, useParams} from "react-router-dom";
import { fetchMovieDetails } from "components/Utils/Fetch";
import { useState, useEffect,  Suspense } from "react";
import css from './MovieDetails.module.css'
const MovieDetails = () =>{
    const {movieId} = useParams();
    const [movie, setMovie] = useState(null);
    const location = useLocation();
    useEffect(() => {
        fetchMovieDetails(movieId)
        .then((data) => setMovie(data))
    },[movieId])

if(!movie){
    return null
}
const {original_title, vote_average, poster_path,
     release_date,overview, genres} = movie





/*const backLinkHref = useRef(location.state?.from ?? "/");*/
const backLinkHref = location.state?.from ?? "/"


return(
    <>
    <h2 className={css.title}>Movie Details</h2>
    <Link to={backLinkHref} className={css.backLink}>Back to movies</Link>
    <h3 className={css.titleMovie}>{original_title}</h3>
    <div className={css.descr}>
    <p >Release date <span className={css.bold}>{release_date}</span></p>
    <p >Vote average <span className={css.bold}>{vote_average}</span></p>
    <p>{overview}</p>
    </div>
    <img src={ `https://image.tmdb.org/t/p/w300/${poster_path}`} alt = "actor" className={css.img}></img>
   
    {genres.map((g) => <p key={g.id}>{g.name}</p> )}
    
     <div className={css.description}>
    <Link to="cast" className={css.link}>cast</Link>
    <Link to="reviews" className={css.link}>reviews</Link>
    </div>
    <Suspense fallback ={<div>Loading subpage....</div>}>
    <Outlet/>
    </Suspense>
    </>
)
}

export default MovieDetails;