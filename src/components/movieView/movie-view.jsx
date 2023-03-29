import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import "./movie-view.scss";

export const MovieView = ({ movies }) => {
    const { movieId } = useParams();

    const movie = movies.find((m) => m._id === movieId);
    return (
        <Card>
            <Card.Body>
                <Card.Img variant="top" className="w-100" src={movie.image} />
                <Card.Title className="title">
                    <span> Title: </span>
                    <span> {movie.title} </span>
                </Card.Title>
                <Card.Subtitle className="genre">
                    <span> Genre: </span>
                    <span> {Object.values(movie.genre).join(", ")} </span>
                </Card.Subtitle>
                <Card.Text className="director">
                    <span> Director: </span>
                    <span> {movie.director.map((director) => director.Name).join(", ")} </span>
                </Card.Text>
                <Card.Text className="actors">
                    <span> Actors: </span>
                    <span> {movie.actors} </span>
                </Card.Text>
                <Card.Text className="movie-description">
                    <span> Description: </span>
                    <span> {movie.description} </span>
                </Card.Text>
                <Link to={`/`}>
                    <Button className="back-button" style={{ cursor: "pointer" }}>Back </Button>
                </Link>
            </Card.Body>
        </Card>
    );
};