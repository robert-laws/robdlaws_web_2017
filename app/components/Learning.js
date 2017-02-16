// presentational

var React = require('react');
var { Container, Header } = require('semantic-ui-react');

var Learning = React.createClass({
    render() {
        return (
            <Container id="topDiv">
                <Header as="h3">Learning</Header>
            </Container>
        )
    }
});

module.exports = Learning;
