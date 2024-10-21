class Movie extends React.Component {


    render() {
        const { movie } = this.props.data;
        return (
            <div id="info">
                <div id="poster">
                    <MoviePoster img={movie.img} name={movie.name} />
                </div>
                <div id="data">
                    <h2>{movie.name}</h2>
                    <p>Years: {movie.years}</p>
                    <p>Seasons: {movie.seasons}</p>
                    <p>Studio: {movie.studio}</p>
                    <p>Directors: {movie.directors}</p>
                    <MovieRewards rewards={movie.rewards} />
                </div>
            </div >
        );
    }
}