import "./movie-view.scss";

export const MovieView = ({ movie, onBackClick }) => {
    return (
        <div>
            <div>
                <div>
                    <img className="w-100" src={movie.image} />
                </div>
                <div>
                    <span>Title: </span>
                    <span> {movie.title} </span>
                </div>
                <div>
                    <span>Genre: </span>
                    <span> {Object.values(movie.genre).join(", ")} </span>
                </div>
                <div>
                    <span>Director: </span>
                    <span> {movie.director.map((director) => director.Name).join(", ")} </span>
                </div>
                <div>
                    <span>Actors: </span>
                    <span> {movie.actors} </span>
                </div>
                <div>
                    <span>Description: </span>
                    <span> {movie.description} </span>
                </div>

            </div>
            <button onClick={onBackClick} className="back-button" style={{ cursor: "pointer" }}>Back </button>
        </div>
    );
};