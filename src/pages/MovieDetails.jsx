import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard/MovieCard";
import { SearchMovieById } from "../OmdbApi/omdbApi";

    
import './MovieDetails.css'

import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'


function MovieDetails () {
    const [movie, setMovie] = useState(null);
    const {id} = useParams();
    


    async function downloadMovie(){
        const response = await axios.get(SearchMovieById(id));
        setMovie(response.data);
    }

    useEffect(() => {
        downloadMovie();
        // if(Math.random() > 0.5) {
        //     throw "error"
        // }
        // throw 'error'

    }, [id]);
    return (

    <div className="container my-5">
        <div className="row">
            
            <div className="col-lg-4 col-md-5 col-sm-12">
                {movie && <MovieCard 
                    Title={movie.Title}
                    Year={movie.Year}
                    Type={movie.Type}
                    Poster={movie.Poster}
                    id={movie.imdbID}  
                />}
            </div>
            <div className="col-lg-8 col-md-7 col-sm-12">
                {movie && <div className="movie-details">
                    <div className="plot"><b>Plot:</b> {movie.Plot}</div>
                    <div className="actors"><b>Actors:</b> {movie.Actors}</div>
                    <div className="genre-div">
                        <b>Genre: </b> 
                        {movie.Genre.split(",").map((genre) => {
                            return <span className="genre" key={genre}>{genre}</span>
                        })}
                    </div>
                    <div className="rating">
                        <Rating items={10} value={Math.floor(movie.imdbRating)}/>
                    </div>
                </div>}
            </div>

        </div>
    </div>
    
    )
}
export default MovieDetails;