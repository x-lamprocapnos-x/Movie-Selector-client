# **Movie Selector Client**
### A React application that allows users to browse and select movies, with features for user authentication, movie details, and user profile management. The app interacts with a movie API to fetch and display data and integrates Redux for state management.

## **Table of Content**
- Features
- Installation
- Development
- Dependencies
- Usage Guide
- API Integration
- Redux Store Structure
- File Structure
- Issues and Contributions

## **Features**
- User Authentication: Sign up, login, and logout functionalities.
- Browse Movies: View a list of movies fetched from an external API.
- Filter Movies: Search movies by title.
- Movie Details: View detailed information about a selected movie, including genre, director, actiors, and descriptions.
- Profile Management: Users can view their profule and manage their favorite movies.

## **Installation**
1. Clone the repository:
`git clone https://github.com/x-lamprocapnos-x/Movie-Selector-client.git`
2. Navigate to the project directory:
`cd Movie-Selector-client`
3. Install dependencies:
`npm install`

## **Development**
To run the app in development mode, use:
`npm start`
This will start the app and open it in your default browser at `http://localhost:1234.`

## **Dependencies**
- React: Frontend library for building user interfaces.
- Redux/Redux Toolkit: State management for handling application state.
- React-Bootstrap: CSS framework for responsive design.
- React Router: For routing within the application.
- Parcel: Bundler for the project.
- SASS: For custom styling.

## **Usage Guide**
- Upon visiting the app, users can sign up or log in.
- After logging in, users can view a list of movies, search for specific movies, and view detailed movie information.
- Users can also view and update their profile, including managing their favorite movies.

## **API Integration**
The app interacts with the Movie Selector API for fetching movie data and handling user authentication.

## **API endpoint:**
`https://movie-selector.onrender.com/movies`

## **Redux Store Structure**
- movies: Holds the list of movies fetched from the API.
- filter: Stores the search input for filtering movies by title.
- user: Stores the authenticated user's data.

## **File Structure**
Here’s an overview of the main files and folders:

- src/components/: Contains React components like MainView, MovieCard, MovieView, ProfileView, LoginView, and SignupView.
- src/reducers/: Contains Redux reducer logic.
- src/actions/: Handles Redux action definitions.
- index.jsx: Entry point of the application.
- index.scss: Main styling file using SASS.

## **Issues and Contributions**
If you encounter any issues, feel free to open an issue on the GitHub Issues Page.
