import { useState, useEffect } from "react";
import { MovieCard } from "../movieCard/movie-card";
import { MovieView } from "../movieView/movie-view";
import { LoginView } from "../loginView/login-view";
import { SignupView } from "../signUpView/signUp-view";

export const MainView = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedToken = localStorage.getItem("token");
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect(() => {
        if (!token) {
            return;
        }

        fetch("https://movie-selector.onrender.com/movies", {
            headers: { Authorization: `Bearer ${token}` }
        })
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
    }, [token]);

    if (!user) {
        return (
            <>
                <LoginView
                    onLoggedIn={(user, token) => {
                        setUser(user);
                        setToken(token);
                    }}
                />
                or <SignupView />
            </>
        );
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
            <button onCLick={() => { setUser(null); setToken(null); localStorage.clear(); }}>Logout</button>
        </div>
    );


};