import { useState } from "react";
import { Button, Form } from "react-bootstrap";

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
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formUsername">
                <Form.Label>Username:</Form.Label>
                <Form.Control
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    minLength="7"
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

            <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
                
                <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            
            </Form.Group>

            <Form.Group controlId="formBirthday"></Form.Group>
            <Form.Label></Form.Label>
                Birthday:
                <Form.Control
                    type="date"
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                    required
                />
            
            <Button variant="primary" type="submit" className="submit-button">Submit</Button>
        </Form>
    );
};