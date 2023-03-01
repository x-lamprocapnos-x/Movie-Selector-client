import { useState, useEffect } from "react";
import { MovieCard } from "../movieCard/movie-card";
import { MovieView } from "../movieView/movie-view";

export const MainView = () => {
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect(() => {
        fetch("https://movie-selector.onrender.com/movies")
            .then((response) => response.json())
            .then((data) => {
                const moviesFromApi = data.docs.map((doc) => {
                    return{
                        id: doc.key,
                        title: doc.Title,
                        author: doc.Director_name?.[0]
                    };
                });

                setMovies(moviesFromApi);
                console.log("movies from api: ", data);
            });
    }, []);


    if (selectedMovie) {
        return (
            <MovieView
                movie={selectedMovie} onBackClick={() =>
                    setSelectedMovie(null)} />
        );
    }

    if (movies.length === 0) {
        return <div>Please add Movies!</div>
    }

    return (
        <div>
            {movies.map((movie) => {
                return <MovieCard
                    key={movie.id}
                    movie={movie}
                    onMovieClick={(newSelectedMovie) => {
                        setSelectedMovie(newSelectedMovie);
                    }}
                />
            })}
        </div>
    );

};