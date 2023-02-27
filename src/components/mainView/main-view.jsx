import { useState } from "react";
import { MovieCard } from "../movieCard/movie-card";
import { MovieView } from "../movieView/movie-view";

export const MainView = () => {
    const [movies, setMovies] = useState([
        {
            id: 1,
            title: "Up",
            image: "https://m.media-amazon.com/images/I/71JYINi-l0L._AC_UF894,1000_QL80_.jpg",
            director: "Pete Doctor"
        },
        {
            id: 2,
            title: "Gnomeo and Juliet",
            image: "https://m.media-amazon.com/images/M/MV5BZDNmYzlhMTMtNmFlMC00ODY5LTgzOTctZDI3ZWNhZjM2OGE1XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_FMjpg_UX1000_.jpg",
            director: "Kelly Asbury"
        },
        {
            id: 3,
            title: "Cloudy with a Chance of Meatballs",
            image: "https://www.themoviedb.org/t/p/original/hSFnUubrQRTPwhffn1YhJqfGHH4.jpg",
            director: "Phil Lord"
        }
    ]);

    const [selectedMovie, setSelectedMovie] = useState(null);

    if (selectedMovie) {
        return (
            <MovieView
                movie={selectedMovie}
                onBackClick={() => setSelectedMovie(null)}
            />

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
                    onClick={(newSelectedMovie) => {
                        setSelectedMovie(newSelectedMovie);
                    }}
                />
            })}
        </div>
    );

};