var React = require('react');
var { Container } = require('semantic-ui-react');

var About = React.createClass({
    render() {
        return (
            <Container id="topDiv">
                <h1>About This Website.</h1>
            </Container>
        )
    }
});

module.exports = About;