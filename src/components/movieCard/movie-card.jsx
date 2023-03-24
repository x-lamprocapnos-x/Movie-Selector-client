import "./movie-card.scss"
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";

export const MovieCard = ({ movie, onMovieClick }) => {
    return (
        <Card className="h-80">
            <Card.Img variant="top" src={movie.image} />
            <Card.Body>
                <Card.Title className="title">{movie.title}</Card.Title>
                <Card.Subtitle className="card-director">{movie.director.map((director) => director.Name).join(", ")}</Card.Subtitle>
                <Button onClick={() => onMovieClick(movie)} variant="link">
                    Open
                </Button>
            </Card.Body>
        </Card>
    );
};

MovieCard.propTypes = {
    movie: PropTypes.shape({
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