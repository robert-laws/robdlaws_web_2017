// presentational

var React = require('react');
var { Container, Header } = require('semantic-ui-react');

var Resume = React.createClass({
    render() {
        return (
            <Container id="topDiv">
                <Header as="h1">Resume</Header>
            </Container>
        )
    }
});

module.exports = Resume;
