// interactive

var React = require('react');
var { Container } = require('semantic-ui-react');

var TravelPhotos = React.createClass({
    render() {
        return (
            <Container id="topDiv">
                <h1>Travel Photos</h1>
            </Container>
        )
    }
});

module.exports = TravelPhotos;
