import "./movie-card.scss"
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const MovieCard = ({ movie }) => {
    return (
        <Card bg="light" className="h-80">
            <Card.Img variant="top" src={movie.image} />
            <Card.Body>
                <Card.Title className="card-title">{movie.title}</Card.Title>
                <Card.Subtitle className="card-director">{movie.director.map((director) => director.Name).join(", ")}</Card.Subtitle>
                <Link to={`/movies/${encodeURIComponent(movie.id)}`}>
                    <Button>Open</Button>
                </Link>
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
    }).isRequired
};