// presentational

var React = require('react');
var { Container, Header } = require('semantic-ui-react');

var Learning = React.createClass({
    render() {
        return (
            <Container className="subContent">
                <Header as="h3">Learning</Header>
                <p>...</p>
            </Container>
        )
    }
});

module.exports = Learning;
