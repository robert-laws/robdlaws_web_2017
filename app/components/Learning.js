// presentational

var React = require('react');
var { Segment, Header } = require('semantic-ui-react');
var ResourceCards = require('ResourceCards');

import {cards} from './../data/cards/learning.json';

var Learning = React.createClass({
  render() {
    return (
      <Segment className="subContent" basic>
        <Header as="h3">Learning</Header>
        <p>These are the main online learning websites I use to augment my skills and learn about new technologies.</p>
        <ResourceCards itemsInRow={this.props.perRow} resourceCards={cards} />
      </Segment>
    )
  }
});

module.exports = Learning;
