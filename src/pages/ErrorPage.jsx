import './ErrorPage.css'

import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

import { Link } from "react-router-dom";



function Error () {

    useEffect(() => {
        Aos.init({duration: 1000})
    }, [])
    return (
        <div className='error-page-wrapper' >
            <h1 data-aos="fade-right">Page Not Found...</h1>
            <Link to='/'> <button  data-aos="zoom-in-up">Click Me</button></Link>
        </div>
        
    )
}
export default Error;