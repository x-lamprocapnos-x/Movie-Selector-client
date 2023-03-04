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
        director: PropTypes.shape({
            name: PropTypes.string,
            bio: PropTypes.string,
            birthYear: PropTypes.number
        }),
        actors: PropTypes.arrayOf(PropTypes.string),
        description: PropTypes.string
    }).isRequired,
    onMovieClick: PropTypes.func.isRequired
};