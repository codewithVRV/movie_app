import "./MovieCard.css"

import Aos from 'aos'
import 'aos/dist/aos.css'

import { useNavigate } from "react-router-dom";

import ReactSVG from "../../assets/react.png"

import {LazyLoadImage} from "react-lazy-load-image-component"
import { useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MovieCard ({ Poster, Title, Year, id }) {
    // console.log(id)

    const navigator = useNavigate()

    function handleClickCard(){
        navigator(`/movie/${id}`)
    }

    useEffect(() => {
        Aos.init({duration: 1500})
    }, [])
    return (

        <div className='movie-card-wrapper' data-aos = "flip-left" onClick={() => handleClickCard()}>

            <Card>
            <LazyLoadImage className="movie-image"   
                            src={Poster}
                            key={Poster}
                            placeholderSrc={ReactSVG}
                            alt="Image"
                            />
                <Card.Body>
                    <Card.Title>{Title}</Card.Title>
                </Card.Body>
            </Card>

        {/* <div className="center-card">
            <div className="movie-image">
                {/* <img  src={Poster} alt="harray"/> */}
                {/* <LazyLoadImage  src={Poster}
                                key={Poster}
                                placeholderSrc={ReactSVG}
                                alt="Image"
                                />
                </div>
            </div>
            <div className="movie-title">
                <h4>{Title}</h4>
            </div> */}
            
        {/* <div>
            <span id="release-date">Release Date: <b>{Year}</b></span>&nbsp;
        </div> */}

        </div>
            
    )
}

export default MovieCard;


