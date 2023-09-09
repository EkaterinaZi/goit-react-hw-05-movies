import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieReviews } from "components/Utils/Fetch";
import css from './Reviews.module.css'
const Reviews = () =>{
    const {movieId} = useParams();
    const [reviews, setReviews] = useState(null);

    useEffect(() => {
        fetchMovieReviews(movieId)
        .then((data) => setReviews(data))
    },[movieId])

    if(!reviews){
      return null
    }
     console.log(reviews)

        return(
        <>
        {reviews.length !== null && <div>
        <h2 className={css.title}>Reviews</h2>
        <ul>
        {reviews.results.map((r) => <li key={r.id}>
            <p className={css.autor}>{r.author}</p>
            <p className={css.review}>{r.content}</p><hr></hr>
        </li> )}
        </ul>
        </div> }
        </>
    )
    }
    
    export default Reviews;