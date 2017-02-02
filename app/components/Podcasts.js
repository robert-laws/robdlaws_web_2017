var React = require('react');
var { Container } = require('semantic-ui-react');

var Podcasts = React.createClass({
    render() {
        return (
            <Container id="topDiv">
                <h1>Podcasts</h1>
            </Container>
        )
    }
});

module.exports = Podcasts;
