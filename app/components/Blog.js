// interactive

var React = require('react');
var { Container, Header } = require('semantic-ui-react');

var Blog = React.createClass({
    render() {
        return (
            <Container id="topDiv">
                <Header as="h1">Blog</Header>
            </Container>
        )
    }
});

module.exports = Blog;
