// presentational

var React = require('react');
var { Container, Header } = require('semantic-ui-react');

var Podcasts = React.createClass({
    render() {
        return (
            <Container className="subContent">
                <Header as="h3">Podcasts</Header>
                <p>...</p>
            </Container>
        )
    }
});

module.exports = Podcasts;
