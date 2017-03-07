// interactive

var React = require('react');
var { Container, Header, Divider } = require('semantic-ui-react');

var Gallery = require('Gallery');
import { images } from './../data/photos/fun.json';

var FunPhotos = React.createClass({
  render() {
    var location = "fun";
    return (
      <Container id="topDiv">
        <Header as="h1">Fun Photos</Header>
        <p>I've selected some whimsical photos to share. Some are of things I've seen during my travels which have caught my eye, but aren't exactly typical travel photos. Having a smartphone makes quick photos of interesting objects or everyday happenings (like getting a drink at Starbucks) easy to capture.</p>
        <Divider />
        <Gallery location={location} images={images} />
      </Container>
    )
  }
});

module.exports = FunPhotos;
