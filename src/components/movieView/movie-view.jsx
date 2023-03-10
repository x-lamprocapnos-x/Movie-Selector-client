export const MovieView = ({ movie , onBackClick}) => {
    return (
        <div>
            <div>
                <div>
                    <img src={movie.image} />
                </div>
                <div>
                    <span>Title: </span>
                    <span>{movie.title}</span>
                </div>
                <span>Director: </span>
                <span>{movie.director.map((director) => director.Name).join(", ")}</span>
            </div>
            <button onClick={onBackClick}>Back</button>
        </div>
    );
};