import { Card } from "react-bootstrap"

export const profileView = ({user}) => {

    const userData = JSON.parse(user);

    return(
        <Card>
            <Card.Body>
                <Card.Title>{userData.Username}</Card.Title>
                <Card.Text>
                    <p>Email: {userData.Email}</p>
                    <p>Birthday: {userData.Birthday}</p>
                    <p>Favorite Movie: {userData.FavoriteMovie}</p>
                </Card.Text>
            </Card.Body>
        </Card>
    )

}