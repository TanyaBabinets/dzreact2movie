class MoviePoster extends React.Component {
    render() {
        const { img, name } = this.props;

    
        return (
            <div>
                <img src={img} alt={`${name} poster`} style={{ width: '400px', height: '600px' }} />
            </div >
        );
    }

}