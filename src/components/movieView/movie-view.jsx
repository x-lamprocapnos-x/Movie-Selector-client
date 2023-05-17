import { connect } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import "./movie-view.scss";

const MovieView = props => {
    const { movies, user, token, updateUser } = props;
    const { movieId } = useParams();
    const movie = movies.find((m) => m.id === movieId);
    const [isFavorite, setFavorite] = useState(user.FavoriteMovies.includes(movie.id));

    useEffect(() => {
        setFavorite(user.FavoriteMovies.includes(movie.id));
    }, [movie.id]);
    
    const addFavorite = () => {
        fetch(`https://movie-selector.onrender.com/users/${user.Username}/movies/${movieId}`, {
            method: "POST",
            headers: {Authorization : `Bearer ${token}` }
        })
        .then(response => {
            if(response.ok){
                return response.json();
            }
            else{
                alert("Failure to add movie to Favorites");
                return false;
            }                
        })
        .then(user => {
            if (user) {
                alert("Successfully added to Favorites");
                setFavorite(true);
                updateUser(user);     
            }
        })
        .catch(e => {
            alert(e)
        });
    }

    const removeFavorite = () => {
        fetch(`https://movie-selector.onrender.com/users/${user.Username}/movies/${movieId}`, {
            method: "DELETE",
            headers: {Authorization: `Bearer ${token}` }
        })
        .then(response => {
            if(response.ok){
                return response.json();
            }
            else {
                console.log("Failed to remove movie from favorites");
                return false;
            }
        })
        .then(user => {
            if (user) {
                console.log("Successfully removed from favorites");
                setFavorite(false);
                updateUser(user);
            }
        })
        .catch(e => {
            alert(e);
        });
    }

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
                    <span> {movie.actors.join(", ")} </span>
                </Card.Text>
                <Card.Text className="movie-description">
                    <span> Description: </span>
                    <span> {movie.description} </span>
                </Card.Text>
                <Link to={`/`}>
                    <Button className="back-button" style={{ cursor: "pointer" }}>Back </Button>
                </Link>
                {isFavorite ? 
                    <Button variant="danger" style={{ cursor: "pointer"}} onClick={removeFavorite}>Remove Favorite</Button>
                    : <Button variant="success" style={{cursor: "pointer"}} onClick={addFavorite}>Favorite</Button>
                }
            </Card.Body>
        </Card>
    );
};

const mapStateToProps = state => {
    const { movies } = state;
    return { movies };
  };
export default connect (mapStateToProps)(MovieView);