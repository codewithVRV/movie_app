import MovieCard from "../components/MovieCard/MovieCard";
import useMovieList from "../components/hooks/useMovieList";

import "./Home.css"




function Home () {

    const {movieList} = useMovieList("harry", "avengers", "batman",)
    
    return (
        
        <>
            <div className="container-fluid movie-all-cards">                
                {movieList.map((movie) => <MovieCard {...movie} key={movie.imdbID} id={movie.imdbID}/>) }
            </div>
        </>
    )
}

export default Home;