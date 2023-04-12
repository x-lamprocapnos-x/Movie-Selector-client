import { useState, useEffect } from "react";
import { MovieCard } from "../movieCard/movie-card";
import { MovieView } from "../movieView/movie-view";
import { LoginView } from "../loginView/login-view";
import { SignupView } from "../signUpView/signup-view";
import { ProfileView } from "../profileView/profile-view";
import { NavigationBar } from "../navigation-bar/navigation-bar";
import { Row, Col, Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

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
        <BrowserRouter>
            <NavigationBar
                user={user}
                onLoggedOut={() => {
                    setUser(null);
                    setToken(null);
                    localStorage.clear();
                }}
            />
            <Container md={10}>
                <Row className="justify-content-md-center">
                    <Routes>
                        <Route
                            path="/signup"
                            element={
                                <>
                                    {user ? (
                                        <Navigate to="/" />
                                    ) : (
                                        <Col md={6}>
                                            <SignupView />
                                        </Col>
                                    )}
                                </>
                            }
                        />
                        <Route
                            path="/login"
                            element={
                                <>
                                    {user ? (
                                        <Navigate to="/" />
                                    ) : (
                                        <Col md={6}>
                                            <LoginView onLoggedIn={(user, token) => {
                                                setUser(user);
                                                setToken(token);
                                            }}
                                            />
                                        </Col>
                                    )}
                                </>
                            }
                        />
                        <Route
                            path="/profile"
                            element={
                                <>
                                    {!user ? (
                                        <Navigate to="/login" replace />
                                    ) : (
                                        <Col md={8}>
                                            <ProfileView
                                                user={user}
                                                token={token}
                                                movies={movies}
                                                onLoggedOut={() => {
                                                    setUser(null);
                                                    setToken(null);
                                                    localStorage.clear();
                                                }}
                                            />
                                        </Col>
                                    )}
                                </>
                            }
                        />
                        <Route
                            path="/movies/:movieId"
                            element={
                                <>
                                    {!user ? (
                                        <Navigate to="login" replace />
                                    ) : movies.length === 0 ? (
                                        <Col>The list is empty!</Col>
                                    ) : (
                                        <Col md={8}>
                                            <MovieView
                                                movies={movies}
                                                user={user}
                                                token={token}
                                                updateUser={setUser}
                                            />
                                        </Col>

                                    )}
                                </>
                            }
                        />
                        <Route
                            path="/"
                            element={
                                <>
                                    {!user ? (
                                        <Navigate to="/login" replace />
                                    ) : movies.length === 0 ? (
                                        <Col>The list is empty!</Col>
                                    ) : (
                                        <>
                                            {movies.map((movie) => (
                                                <Col className="mb-4" key={movie._id} md={3}>
                                                    <MovieCard movie={movie} />
                                                </Col>
                                            ))}
                                        </>
                                    )}
                                </>
                            }
                        />

                    </Routes>
                </Row>
            </Container>
        </BrowserRouter>
    )
}