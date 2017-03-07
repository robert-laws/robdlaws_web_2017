
var React = require('react');
var { Segment, Header } = require('semantic-ui-react');
var ResourceCards = require('ResourceCards');

import {cards} from './../data/cards/prototyping.json';

var Prototypes = React.createClass({
  render: function() {
    return (
      <Segment className="subContent" basic>
        <Header as="h3">UI Prototyping</Header>
        <p>Tools for UI/UX designers to create mock-ups and workflows for websites or mobile apps.</p>
        <ResourceCards itemsInRow={this.props.perRow} resourceCards={cards} />
      </Segment>
    )
  }
});

module.exports = Prototypes;
