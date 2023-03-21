import { useState, useEffect } from "react";
import { MovieCard } from "../movieCard/movie-card";
import { MovieView } from "../movieView/movie-view";
import { LoginView } from "../loginView/login-view";
import { SignupView } from "../signUpView/signup-view";
import { Row, Col, } from "react-bootstrap";

export const MainView = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedToken = localStorage.getItem("token");
    const [user, setUser] = useState(storedUser ? storedUser : null);
    const [token, setToken] = useState(storedToken ? storedToken : null);
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect(() => {
        if (!token) {
            return;
        }
        // application link
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
                        description: docs.Description,
                        image: docs.ImagePath
                    };
                });

                setMovies(moviesFromApi);
                console.log("movies from api: ", data);
            });
    }, [token]);

    return (
        <Row className="justify-content-md-center">
            {!user ? (
                <Col md={4}>
                    <LoginView onLoggedIn={(user, token) => {
                        setUser(user);
                        setToken(token);
                    }}
                    />
                    or
                    <SignupView />
                </Col>

            ) : selectedMovie ? (
                <Col md={8}>
                    <MovieView
                        movie={selectedMovie}
                        onBackClick={() => setSelectedMovie(null)}
                    />
                </Col>

            ) : movies.length === 0 ? (
                <div>Please add Movies!</div>

            ) : (
                <>
                    {movies.map((movie) => (
                        <Col className="mb-5" key={movie.id} md={3}>
                            <MovieCard
                                movie={movie}
                                onMovieClick={(newSelectedMovie) => {
                                    setSelectedMovie(newSelectedMovie);
                                }}
                            />
                        </Col>
                    ))}
                    <button onClick={() => { setUser(null); setToken(null); localStorage.clear(); }}>Logout</button>

                </>
            )

            }
        </Row>

    )
}