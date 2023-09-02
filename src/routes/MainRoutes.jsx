import {  Routes, Route } from "react-router-dom"
import Home from "../pages/Home";
import React, { Suspense, lazy } from "react";
import ErrorCard from "../components/ErrorCard/ErrorCard";
// import MovieDetails from "../pages/MovieDetails";
// import Error from "../pages/ErrorPage";
// const MovieDetails = React.lazy(() => import("../pages/MovieDetails"))
const MovieDetails = React.lazy(() => import("../pages/MovieDetails"))
const Error = React.lazy(() => import("../pages/ErrorPage"))

import { ErrorBoundary } from "react-error-boundary";

import FallBackError from "../components/FallBackError/FallBackError";

function MainRoutes () {
    return (
        <Routes>
            <Route path="/" element={ <Home />}/>
            <Route path="/movie/:id" element={(
                <ErrorBoundary FallbackComponent={FallBackError} onReset={() => {}}>
                    <Suspense fallback={<ErrorCard />}>
                        <MovieDetails />
                    </Suspense>
                </ErrorBoundary>
                
            )}/>
            <Route path="*" element={(
                
                <Suspense fallback={<h1>SomeThing Went Wrong...</h1>}>
                    <Error />
                </Suspense>
            
            
            )}/>
        </Routes>
    )
}

export default MainRoutes;