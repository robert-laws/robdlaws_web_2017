var React = require('react');
var { Container } = require('semantic-ui-react');

var FrontEnd = React.createClass({
    render() {
        return (
            <Container id="topDiv">
                <h1>Front-End Development</h1>
            </Container>
        )
    }
});

module.exports = FrontEnd;