// presentational

var React = require('react');
var { Container, Segment } = require('semantic-ui-react');

var About = (props) => {
  return (
    <Container id="topDiv">
      <Segment>
        <h1>About Me and this Website...</h1>
      </Segment>
    </Container>
  )
}

module.exports = About;
