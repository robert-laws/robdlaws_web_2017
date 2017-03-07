// presentational

var React = require('react');
var { Segment, Header } = require('semantic-ui-react');
var ResourceCards = require('ResourceCards');

import {cards} from './../data/cards/podcasts.json';

var Podcasts = React.createClass({
  render() {
    return (
      <Segment className="subContent" basic>
        <Header as="h3">Podcasts</Header>
        <p>Podcasts focused on web development, programming, and trends in the community in developers.</p>
        <ResourceCards itemsInRow={this.props.perRow} resourceCards={cards} />
      </Segment>
    )
  }
});

module.exports = Podcasts;
