import PropTypes from "prop-types";

export const MovieCard = ({movie, onMovieClick}) => {
    return (
        <div
            onClick={() => {
                onMovieClick(movie);
            }}
        >
            {movie.title}
        </div>
    );
};

MovieCard.propTypes = {
    movie : PropTypes.shape({
        title: PropTypes.string,
        genre: PropTypes.shape({
            name: PropTypes.string,
            description: PropTypes.string
        }),
        director: PropTypes.arrayOf(PropTypes.object),
        actors: PropTypes.arrayOf(PropTypes.string),
        description: PropTypes.string
    }).isRequired,
    onMovieClick: PropTypes.func.isRequired
};