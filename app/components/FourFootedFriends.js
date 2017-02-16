// interactive

var React = require('react');
var { Container, Header } = require('semantic-ui-react');

var FourFootedFriends = React.createClass({
    render() {
        return (
            <Container id="topDiv">
                <Header as="h1">Four-Footed Friends</Header>
            </Container>
        )
    }
});

module.exports = FourFootedFriends;
