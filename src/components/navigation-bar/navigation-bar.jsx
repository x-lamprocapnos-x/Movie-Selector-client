import "./navigation-bar.scss";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import SearchBar from "../search-bar/search-bar.jsx";

export const NavigationBar = ({ user, onLoggedOut }) => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand
                    as={Link} to="/">
                    Movie Selector
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {!user && (
                            <>
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                <Nav.Link as={Link} to="/signup">Sign-up</Nav.Link>
                            </>
                        )}
                        {user && (
                            <>
                                <Nav.Link as={Link} to="/">Home</Nav.Link>
                                <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                                <Nav.Link as={Link} onClick={onLoggedOut}>Logout</Nav.Link>
                            </>
                        )}
                        <SearchBar />

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}