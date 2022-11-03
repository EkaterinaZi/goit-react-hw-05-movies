import { fetchMovieCast } from "components/Utils/Fetch";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Cast = () =>{
    const {movieId} = useParams();
    const [cast, setCast] = useState(null);

    useEffect(() => {
        fetchMovieCast(movieId)
        .then((data) => setCast(data))
    },[movieId])

if(!cast){
    return
}

    return(
        <>
        <h2>Cast</h2>
          <ul>
           {cast.cast.map((cast) => 
           <li key={cast.cast_id}>
            <img src={`https://image.tmdb.org/t/p/w300/${cast.profile_path}`} alt="actor"></img>
            <p>{cast.original_name}</p></li>)}
         </ul>
        </>
    )
    }
    
    export default Cast;
    