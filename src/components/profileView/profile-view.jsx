import { useState } from "react";
import { Card, Col, Form, Button } from "react-bootstrap";
import { MovieCard } from "../movieCard/movie-card";

export const ProfileView = ({ user, token, movies, onLoggedOut, updateUser }) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [birthday, setBirthday] = useState("");

    let favoriteMovie = (movie => user.favoriteMovie.includes(movie._id));

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
            body: JSON.stringify(date),
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
            <Col md={8}>
                <Card>
                    <Card.Body>
                        <Card.Title>Profile</Card.Title>
                        <Card.Text>
                            <p>Username: {user.Username}</p>
                            <p>Email: {user.Email}</p>
                            <p>Birthday: {user.Birthday}</p>
                            <p>Favorite Movie: {user.FavoriteMovie}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Button variant="danger" onClick={() => {
                    if (confirm("Are you sure?")) {
                        deleteAccount();
                    }
                }}>Delete Account</Button>
            </Col>
            <Col md={8}>
                <Card>
                    <Card.Title>Update Profile</Card.Title>
                    <Card.Body>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group>
                                <Form.Label>Username:</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={username}
                                    onChange={e => setUsername(e.target.vlaue)}
                                    required
                                    minLength="7"
                                    className="bg-light"
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Password:</Form.Label>
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
                                <Form.Label>Email:</Form.Label>
                                <Form.Control
                                    type="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    required
                                    className="bg-light"
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Birthday:</Form.Label>
                                <Form.Control
                                    type="date"
                                    value={birthday}
                                    onChange={e => setBirthday(e.target.value)}
                                    required
                                    className="bg-light"
                                />
                            </Form.Group>
                            <Button varaint="primary" type="submit">Submit</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}