// presentational

var React = require('react');
var { Container, Header } = require('semantic-ui-react');

var FrontEnd = React.createClass({
    render() {
        return (
            <Container className="subContent">
                <Header as="h3">Front-End Development</Header>
                <p>...</p>
            </Container>
        )
    }
});

module.exports = FrontEnd;
