var React = require('react');
var { Container } = require('semantic-ui-react');

var Blog = React.createClass({
    render() {
        return (
            <Container id="topDiv">
                <h1>Blog</h1>
            </Container>
        )
    }
});

module.exports = Blog;
