// interactive
var React = require('react');
var { Container, Header, Divider } = require('semantic-ui-react');

var Gallery = require('Gallery');
import { images } from './../data/photos/dogs.json';

var FourFootedFriends = React.createClass({
  render() {
    var location = "dogs";
    return (
      <Container id="topDiv">
        <Header as="h1">Four-Footed Friends</Header>
        <p>I'm the proud parent of two great dogs. Snowflake and Flurry. They are both West Highland White Terriers. Snowflake was born in 2010 and Flurry was born in 2013. They both enjoy relaxing, playing outside, and chasing cats and squirrels. Snowflake enjoys relaxing in sunny spots and Flurry loves chasing rings. She will catch and chase rings for hours. They are both world travelers too, having spent time in Europe, the Middle East, and America.</p>
        <Divider />
        <Gallery location={location} images={images} />
      </Container>
    )
  }
});

module.exports = FourFootedFriends;
