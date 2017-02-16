// presentational

var React = require('react');
var { Container, Header } = require('semantic-ui-react');

var SocialNetworking = React.createClass({
    render() {
        return (
            <Container id="topDiv">
                <Header as="h1">Social Networking</Header>
            </Container>
        )
    }
});

module.exports = SocialNetworking;
