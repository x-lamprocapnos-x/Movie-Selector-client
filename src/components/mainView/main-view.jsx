import { useState, useEffect } from "react";
import { MovieCard } from "../movieCard/movie-card";
import { MovieView } from "../movieView/movie-view";
import { LoginView } from "../loginView/login-view";

export const MainView = () => {

    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [user, setUser] = useState(null);
    
    useEffect(() => {
        fetch("https://movie-selector.onrender.com/movies")
            .then((response) => response.json())
            .then((data) => {
                const moviesFromApi = data.map((docs) => {
                    return {
                        id: docs._id,
                        title: docs.Title,
                        genre: docs.Genre,
                        director: docs.Director,
                        actors: docs.Actor_name?.[0],
                        description: docs.Description
                    };
                });

                setMovies(moviesFromApi);
                console.log("movies from api: ", data);
            });
    }, []);

    if (!user) {
        return <LoginView onLoggedIn={(user) => setUser(user)}/>;
    }

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