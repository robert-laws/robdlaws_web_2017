// interactive
var React = require('react');
var { Container, Header, Divider } = require('semantic-ui-react');

var Gallery = require('Gallery');
import { images } from './../data/photos/travel.json';

var TravelPhotos = React.createClass({
  render() {
    var location = "travel";
    return (
      <Container id="topDiv">
        <Header as="h1">Travel Photos</Header>
        <p>I've been fortunate enough to travel often during the past 10 years. Living overseas has made traveling more accessible and a welcome break. Most of my travels have been in Europe and Germany in particular. I've managed to set my foot into all sixteen of the states of Germany, although there's plenty of opportunity to explore each more thoroughly. I have made journeys to many other places throughout North America and Europe. Displayed is a selection of some of my favorite photos.</p>
        <Divider />
        <Gallery location={location} images={images} />
      </Container>
    )
  }
});

module.exports = TravelPhotos;
