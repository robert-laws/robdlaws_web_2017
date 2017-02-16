var React = require('react');
var { Container, Header } = require('semantic-ui-react');

var Page404 = React.createClass({
    render() {
        return (
            <Container id="topDiv">
                <Header as="h1">404 Error - Page Not Found</Header>
            </Container>
        )
    }
});

module.exports = Page404;
