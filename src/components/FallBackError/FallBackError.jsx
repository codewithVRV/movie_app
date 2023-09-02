
import './FallbackError.css'

import Aos from 'aos'

import 'aos/dist/aos.css'
import { useEffect } from 'react'

function FallBackError ({ error, resetErrorBoundary }) {


    useEffect(() => {
        Aos.init({duration: 1000})
    }, [])
    return (
        <>
            <div className="error-page-wrapper">
                <h1  data-aos="fade-right">Something Went Wrong...</h1>
                <button  data-aos="zoom-in-up" onClick={resetErrorBoundary}>Try Again</button>
            </div>
        </>
    )
}

export default FallBackError;