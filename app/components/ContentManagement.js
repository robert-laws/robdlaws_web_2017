// presentational

var React = require('react');
var { Container, Header } = require('semantic-ui-react');

var ContentManagement = React.createClass({
    render() {
        return (
            <Container className="subContent">
                <Header as="h3">Content Management Systems Development</Header>
                <p>...</p>
            </Container>
        )
    }
});

module.exports = ContentManagement;
