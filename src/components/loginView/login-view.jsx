import { React, useState } from "react";



export const LoginView = ({ onLoggedIn }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            Username: username,
            Password: password
        };


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
        <form onSubmit={handleSubmit}>
            <label>
                Username: <input
                    type="text"
                    value={username}
                    minLength="7"
                    onChange={(e) => setUsername(e.targetValue)}
                    required
                />
            </label>
            <label>
                Password: <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.targetValue)}
                    required
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};