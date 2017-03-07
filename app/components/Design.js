// presentational

var React = require('react');
var Prototypes = require('Prototypes');
var WebGraphics = require('WebGraphics');
var DigitalPublications = require('DigitalPublications');
var { Container, Divider, Header } = require('semantic-ui-react');

var Design = React.createClass({
  render() {
    return (
      <Container id="topDiv">
        <Header as="h1">Design</Header>
        <p>Although it's possible for the modern web developer to avoid design, I don't recommend it. Even if a web developer isn't an expert in design theory, tools, or application, these are very things to know how to do. I make use of design - particularly focusing on Photoshop, Illustrator, and InDesign - for things like prototyping, graphics for use on the web, and digital publications.</p>
        <p>Listed below are a portfolio of different design projects - focused on prototyping, web graphics, and digital publishing.</p>
        <Divider />
        <Prototypes perRow={6} />
        <Divider />
        <WebGraphics perRow={6} />
        <Divider />
        <DigitalPublications perRow={6} />
      </Container>
    )
  }
});

module.exports = Design;
