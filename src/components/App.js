import {lazy} from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./Layout/Layout";

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movie/Movies'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));

export const App = () => {
  return (
   
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies/>}/>
        <Route path="movies/:movieId" element={<MovieDetails/>}>
            <Route path="cast" element={<Cast/>}/>
            <Route path="reviews" element={<Reviews/>}/>
        </Route>
        
        <Route path="*" element={<Navigate to="/"/>} />
        </Route>
        
      </Routes>
  
  );
};
