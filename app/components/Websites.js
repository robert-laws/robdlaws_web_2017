// presentational

var React = require('react');
var { Container, Header } = require('semantic-ui-react');

var Websites = React.createClass({
    render() {
        return (
            <Container id="topDiv">
                <Header as="h3">Websites</Header>
            </Container>
        )
    }
});

module.exports = Websites;
