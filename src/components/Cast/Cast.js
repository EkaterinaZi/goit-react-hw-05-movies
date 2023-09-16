import { fetchMovieCast } from "components/Utils/Fetch";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import css from './Cast.module.css'

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
        {cast.length !== null && <div>
        <h2 className={css.title}>Cast</h2>
          <ul className={css.table}>
           {cast.cast.map((cast) => 
           <li key={cast.cast_id}>
            <img src={cast.profile_path
               ? `https://image.tmdb.org/t/p/w300/${cast.profile_path}` : '../../noImg.jpg'} 
            alt="actor" width={150} height={210}></img>
            <p>{cast.original_name}</p>
            </li>)}
         </ul>
         </div>}
        </>
    )
    }
    
    export default Cast;
    