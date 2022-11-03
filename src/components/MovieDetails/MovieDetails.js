import {Link, Outlet, useLocation, useParams } from "react-router-dom";
import { fetchMovieDetails } from "components/Utils/Fetch";
import { useState, useEffect } from "react";
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
const backLinkHref = location.state?.from ?? "/"
return(
    <>
    <h2>MovieDetails</h2>
    <Link to={backLinkHref}>Back to movies</Link>
    <h3>{original_title}</h3>
    <p>{release_date}</p>
    <p>{vote_average}</p>
    <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt="poster movie"></img>
    <p>{overview}</p>
    {genres.map((g) => <p key={g.id}>{g.name}</p> )}
    <Link to="cast" >cast</Link>
    <Link to="reviews">reviews</Link>
    <Outlet/>
    </>
)
}

export default MovieDetails;