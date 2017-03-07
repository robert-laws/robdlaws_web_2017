// presentational

var React = require('react');
var Podcasts = require('Podcasts');
var Websites = require('Websites');
var Learning = require('Learning');
var { Container, Divider, Header } = require('semantic-ui-react');

var Design = React.createClass({
    render() {
        return (
            <Container id="topDiv">
                <Header as="h1">Web Tech</Header>
                <p>Keeping up-to-date with the rapidly moving and always changing landscape of web development requires an awareness of where to find information about what's happening in the development community. There is an abundance of resources available - including websites, podcasts, learning tools, and products.</p>
                <Divider />
                <Podcasts perRow={6} />
                <Divider />
                <Websites perRow={6} />
                <Divider />
                <Learning perRow={6} />
            </Container>
        )
    }
});

module.exports = Design;
