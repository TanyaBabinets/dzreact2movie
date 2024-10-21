class MovieRewards extends React.Component {
    render() {
        const { rewards } = this.props;
        if (!Array.isArray(rewards)) {
            return null;
        }
        return (

            <div>
                <h3>Rewards:</h3>
                <ul>
                    {rewards.map((reward, index) => (
                        <li key={index}>{reward}</li>
                    ))}
                </ul>
            </div>
        );
    }
}