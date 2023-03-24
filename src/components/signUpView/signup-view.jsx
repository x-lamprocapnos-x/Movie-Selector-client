import "./signup-view.scss";
import { useState } from "react";
import { Button, Form, Card, Row } from "react-bootstrap";

export const SignupView = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [birthday, setBirthday] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            Username: username,
            Password: password,
            Email: email,
            Birthday: birthday
        };
        //create profile link
        fetch("https://movie-selector.onrender.com/users", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) => {
            if (response.ok) {
                alert("Signup Successful");
                window.location.reload();
            } else {
                alert("Signup failed");
            }
        });
    };

    return (
        <Row>
            <Card className="sigBox">
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formUsername">
                        <Form.Label className="username">Username:</Form.Label>
                        <Form.Control
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="username"
                            required
                            minLength="7"
                        />
                    </Form.Group>

                    <Form.Group controlId="formPassword">
                        <Form.Label className="password">Password:</Form.Label>

                        <Form.Control
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="choose your password"
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formEmail">
                        <Form.Label className="email-input">Email:</Form.Label>
                        <Form.Control
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="provide valid email"
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formBirthday"></Form.Group>
                    <Form.Label className="birthdate-input">Birthday:</Form.Label>
                    <Form.Control
                        type="date"
                        value={birthday}
                        onChange={(e) => setBirthday(e.target.value)}
                        required
                    />

                    <Button variant="primary" type="submit" className="submit-button">Submit</Button>
                </Form>
            </Card>
        </Row>
    );
};