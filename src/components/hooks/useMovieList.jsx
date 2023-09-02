import { useState, useEffect } from "react";
import { SearchMovie } from "../../OmdbApi/omdbApi";
import axios from "axios";



function useMovieList (...args) {
    const [movieList, setMovieList] = useState([])

    async function downloadDefaultMovies (...args) {
        // console.log(args)
        try{
            const urls = args.map((url) => SearchMovie(url));
            // console.log(urls)
            const response = await axios.all(urls.map(url => axios.get(url)))
            console.log("response", response)
            if(response[0].data.Error) {
                setMovieList([])
            }
            else{
                const movies = response.map((movieResponse) => movieResponse.data.Search);
                setMovieList([].concat(...movies))
            }
            
        }
        catch (error) {
            console.log("Api, Request Failed")
        }

        
       
        // for single movie request;

        // const response = await axios.get(SearchMovie(movieName));
        // setMovieList(response.data.Search)
        // console.log(response.data.Search)
    }

    useEffect(() => {
        downloadDefaultMovies(...args)
    }, [...args])

    return {movieList}
}

export default useMovieList;