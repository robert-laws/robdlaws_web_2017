
var React = require('react');
var { Segment, Header } = require('semantic-ui-react');
var ResourceCards = require('ResourceCards');

import {cards} from './../data/cards/graphics.json';

var WebGraphics = React.createClass({
  render: function() {
    return (
      <Segment className="subContent" basic>
        <Header as="h3">Web Graphics</Header>
        <p>A selection of some of the web graphics I've designed with Adobe Illustrator.</p>
        <ResourceCards itemsInRow={this.props.perRow} resourceCards={cards} />
      </Segment>
    )
  }
});

module.exports = WebGraphics;
