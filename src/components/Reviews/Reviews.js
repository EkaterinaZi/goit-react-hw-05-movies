import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieReviews } from "components/Utils/Fetch";

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
        <h2>Reviews</h2>
        {reviews.results.map((r) => <li key={r.id}>
            <p>{r.author}</p>
            <p>{r.content}</p>
        </li> )}
        </>
    )
    }
    
    export default Reviews;