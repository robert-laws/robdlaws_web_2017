// presentational

var React = require('react');
var { Container, Header } = require('semantic-ui-react');

var Podcasts = React.createClass({
    render() {
        return (
            <Container id="topDiv">
                <Header as="h3">Podcasts</Header>
            </Container>
        )
    }
});

module.exports = Podcasts;
