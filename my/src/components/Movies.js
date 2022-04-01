const Movies = ( {getMovies} ) => {
    const [moviedata, setMoviedata] = useState([]);

    const handleClick = async() => {
        const movies = await getMovies();
        setMoviedata(movies);
    };

    return(
        <main>
            {moviedata?.length > 0 ? <p>{JSON.stringify(moviedata)}</p> : null}
            <button type="button" onClick={handleClick}>Hent data</button>
        </main>
    )
};

export default Movies