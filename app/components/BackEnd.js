// presentational

var React = require('react');
var { Container, Header } = require('semantic-ui-react');

var BackEnd = React.createClass({
    render() {
        return (
            <Container className="subContent">
                <Header as="h3">Back-End Development</Header>
                <p>...</p>
            </Container>
        )
    }
});

module.exports = BackEnd;
