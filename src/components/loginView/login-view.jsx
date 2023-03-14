import "./login-view.scss"
import { React, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";



export const LoginView = ({ onLoggedIn }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            Username: username,
            Password: password
        };

        // login link
        fetch("https://movie-selector.onrender.com/login", {
            method: "Post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then((response) => response.json())
            .then((data) => {
                console.log("Login respsonse: ", data);
                if (data.user) {
                    localStorage.setItem("user", JSON.stringify(data.user));
                    localStorage.setItem("token", data.token);
                    onLoggedIn(data.user, data.token);
                } else {
                    alert("No such user");
                };
            })
            .catch((e) => {
                alert("Something went wrong")
            });
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formUsername">
            <Form.Label>Username:</Form.Label>
                 <Form.Control
                    type="text"
                    value={username}
                    minLength="7"
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </Form.Group>
            
            <Form.Group controlId="formPassword">
            <Form.Label>Password:</Form.Label>
                 <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </Form.Group>
            <Button variant="" type="submit" className="submit-button">Submit</Button>
        </Form>
    );
};