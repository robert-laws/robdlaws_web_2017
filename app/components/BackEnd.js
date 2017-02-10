// presentational

var React = require('react');
var { Container } = require('semantic-ui-react');

var BackEnd = React.createClass({
    render() {
        return (
            <Container id="topDiv">
                <h1>Back-End Development.</h1>
            </Container>
        )
    }
});

module.exports = BackEnd;
