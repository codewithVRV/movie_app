import useMovieList from '../hooks/useMovieList';
import './NavBar.css'
import {useEffect, useState, useContext  } from 'react';
import { Link } from 'react-router-dom';

import useDebounce from '../hooks/useDebounce';
import Aos from 'aos';
import 'aos/dist/aos.css'; 



import { useNavigate } from "react-router-dom";

import "../../App.css"

import ThemeContext from '../../context/ThemeContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// font awesom icons

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'




function NavBar () {
    const [autoList, setAutoList] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")
    const {movieList} = useMovieList(!searchTerm ? "harry" : searchTerm)

    const {theme, setTheme} = useContext(ThemeContext)

    const [light, setLight] = useState(false)


    

    const navigator = useNavigate()

    function handleAutoComplete (movieId) {
        navigator(`/movie/${movieId}`);
        
    }

    function updateTheme () {
        if( theme == "dark") {
            setTheme("light");
            localStorage.setItem("app-theme", "light")
        }
        else{
            setTheme("dark");
            localStorage.setItem("app-theme", "dark")
        }
    }
   
    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])

    return (
            
            <>

            
        <div className="navbar-wrapper"  data-aos="flip-up">

            


        <div className="container-fluid  bg-body-tertiary p-3">
                <div className="row d-flex justify-content-around">
                    <div className="col-lg-1 col-md-1 col-12">
                        {/* <a className="navbar-brand" href="#"></a> */}
                        <Link  className="navbar-brand" to={'/'}><h3>Movie Hub</h3></Link>
                    </div>
                    <div className="col-lg-8 col-md-6 col-12">
                        <input className="form-control me-2" 
                        type="search" placeholder="Search movie here.." aria-label="Search" 
                        
                        onFocus={() => {
                            setAutoList(true)
                        }}
                        onBlur={() => {
                            setAutoList(false)
                        }}
                        onChange={useDebounce((e) => setSearchTerm(e.target.value))}
                        />
                    </div>
                    
                    <div className="col-lg-1 col-md-1"  id="btn-mode">
                        <button className="btn btn-outline-success search-bar" id='toggle-btn' type="submit" onClick={() => {setLight(!light); updateTheme()} }>
                            <FontAwesomeIcon className='theme-icon' icon={(theme == "dark") ? faSun : faMoon }/>

                            </button>
                    </div>
                </div>
            </div>
            
            <div className="container input-parent">
                <div className="row">
                    <div className="col-lg-6 ">
                        <div id='result-list'  style={{ display: (autoList) ? "block" : "none"}}>
                        <div  className='auto-complete'>Search for another item...{searchTerm}</div>
                        {movieList.length > 0 && movieList.map((movie) =>  <div  onMouseDown={() => handleAutoComplete(movie.imdbID)}
                        key={movie.imdbID} className='auto-complete'>{movie.Title}</div>)}
                        
                        </div>
                    </div>
                </div>
            </div>
{/* 
            <div className='movie-base-title'><Link to={"/"}>Movie Page</Link></div>
            <div className="search-bar">
                <input  type="text" 
                        placeholder='Search movie here..'
                        id='search-bar'
                        onFocus={() => {
                            setAutoList(true)
                        }}
                        onBlur={() => {
                            setAutoList(false)
                        }}
                        onChange={useDebounce((e) => setSearchTerm(e.target.value))}
                />
                <div id='result-list' style={{ display: (autoList) ? "block" : "none"}}>
                    <div  className='auto-complete'>Search for another item...{searchTerm}</div>
                    {movieList.length > 0 && movieList.map((movie) =>  <div  onMouseDown={() => handleAutoComplete(movie.imdbID)}
                    key={movie.imdbID} className='auto-complete'>{movie.Title}</div>)}
                    
                </div>
            </div>
            <div onClick={updateTheme}>
                <FontAwesomeIcon className='theme-icon' icon={(theme == "dark") ? faSun : faMoon }/>
            </div> */}
        </div>

        </>
    )
}

export default NavBar;