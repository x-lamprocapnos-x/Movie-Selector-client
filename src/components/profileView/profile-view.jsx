import { useState } from "react";
import { Card, Col, Form, Button } from "react-bootstrap";
import { MovieCard } from "../movieCard/movie-card";
import "./profile-view.scss";

export const ProfileView = ({ user, token, movies, onLoggedOut, updateUser }) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [birthday, setBirthday] = useState("");

    let favoriteMovie = (movie => user.favoriteMovie.includes(movie.Id));

    const handleSubmit = event => {
        event.preventDefault();


        const userData = {
            username,
            password,
            email,
            birthday
        }

        fetch(`https://movie-selector.onrender.com/users/${user.username}`, {
            method: "PUT",
            body: JSON.stringify(userData),
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    alert("Changes to user failed");
                    return false;
                }
            })
            .then(user => {
                if (user) {
                    alert("Changes to user Successful");
                    updateUser(user);
                }
            })
            .catch(e => {
                alert(e);
            });
    }

    const deleteUser = () => {
        fetch(`https://movie-selector.onrender.com/users/${user.username}`, {
            method: "DELETE",
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(response => {
                if (response.ok) {
                    alert("User deleted");
                    onLoggedOut();
                } else {
                    alert("User could not be deleted");
                }
            })
            .catch(e => {
                alert(e);
            });
    }

    return (
        <>
            <Col md={10}>
                <Card>
                    <Card.Header className="bg-dark">Profile</Card.Header>
                    <Card.Body>
                        <Card.Text>Username: {user.Username}</Card.Text>

                        <Card.Text>Password: </Card.Text>

                        <Card.Text>Email: {user.Email}</Card.Text>

                        <Card.Text>Birthday: {user.Birthday}</Card.Text>

                        <Card.Text>
                            Favorite Movies:{movies.filter(movie => user.FavoriteMovies.includes(movie.id)).map(m => <MovieCard movie={m} />)}
                        </Card.Text>

                        <Button variant="danger" onClick={() => {
                            if (confirm("Are you sure?")) {
                                deleteAccount();
                            }
                        }}>Delete Account</Button>
                    </Card.Body>
                </Card>

                <Card>
                    <Card.Header className="bg-dark">Update Profile</Card.Header>
                    <Card.Body>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group>
                                <Form.Label>Update Username: </Form.Label>
                                <Form.Control
                                    type="text"
                                    value={username}
                                    onChange={e => setUsername(e.target.value)}
                                    required
                                    minLength="7"
                                    className="bg-light"
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Update Password: </Form.Label>
                                <Form.Control
                                    type="password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    required
                                    minLength="8"
                                    className="bg-light"
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label> Update Email: </Form.Label>
                                <Form.Control
                                    type="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    required
                                    className="bg-light"
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label> Update Birthday: </Form.Label>
                                <Form.Control
                                    type="date"
                                    value={birthday}
                                    onChange={e => setBirthday(e.target.value)}
                                    required
                                    className="bg-light"
                                />
                            </Form.Group>
                        </Form>
                        <Button varaint="primary" type="submit">Submit</Button>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}