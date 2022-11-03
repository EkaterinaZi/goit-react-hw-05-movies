import { Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./Home/Home";
import Movies from "./Movies/Movies";
import Cast from "./Cast/Cast";
import Reviews from "./Reviews/Reviews";
import MovieDetails from "./MovieDetails/MovieDetails";


export const App = () => {
  return (
    <>
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>
    </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/movies/:movieId" element={<MovieDetails/>}>
            <Route path="cast" element={<Cast/>}/>
            <Route path="reviews" element={<Reviews/>}/>
          </Route>
        
        <Route path="*" element={<Navigate to="/"/>} />
      </Routes>
    </>
  );
};
