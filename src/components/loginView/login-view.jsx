import { React, useState } from "react";

const [username, setUsername] = useState("");
const [password, setPassword] = useState("");

export const LoginView = ({onLoggedIn}) => {
    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            access: username,
            secret: password
        };


        fetch("https://openlibrary.org/account/login.json", {
            method: Post,
            body: JSON.stringify(data)
        }).then((response) => {
            if (response.ok){
                onLoggedIN(username);
            }else {
                alert ("Login Failed");
            };
        })
    };

    return (
        <form onSubmit = {handleSubmit}>
            <label>
                Username: <input 
                type="text"
                value = {username}
                onChange = {(e) => setUsername(e.targetValue)}
                required
            />
            </label>
            <label>
                Password: <input 
                type="password"
                value = {password} 
                onChange = {(e) => setPassword(e.targetValue)} 
                required
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};