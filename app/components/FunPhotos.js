// interactive

var React = require('react');
var { Container, Header } = require('semantic-ui-react');

var FunPhotos = React.createClass({
    render() {
        return (
            <Container id="topDiv">
                <Header as="h1">Fun Photos</Header>
            </Container>
        )
    }
});

module.exports = FunPhotos;
