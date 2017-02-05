// presentational

var React = require('react');
var { Container } = require('semantic-ui-react');

var SocialNetworking = React.createClass({
    render() {
        return (
            <Container id="topDiv">
                <h1>Social Networking</h1>
            </Container>
        )
    }
});

module.exports = SocialNetworking;
