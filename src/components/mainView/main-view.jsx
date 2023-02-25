import { useState } from "react";
import { MovieCard} from "../movieCard/movie-card";

export const MainView = () => {
    const [movies, setMovies] = useState([
        { id: 1, Title: "Up" },
        { id: 2, Title: "Gnomeo and Juliet" },
        { id: 3, Title: "Cloudy with a Chance of Meatballs" }
    ]);

    if (movies.length === 0) {
        return <div>Please add Movies!</div>
    } else {
        return (
            <div>
                {movies.map((movie) => {
                    return <MovieCard movie={movie}/>
                })}
            </div>
        );
    }
};