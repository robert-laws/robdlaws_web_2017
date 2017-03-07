
var React = require('react');
var { Segment, Header } = require('semantic-ui-react');
var ResourceCards = require('ResourceCards');

import {cards} from './../data/cards/digitalPublications.json';

var DigitalPublication = React.createClass({
  render: function() {
    return (
      <Segment className="subContent" basic>
        <Header as="h3">Digital Publications</Header>
        <p>A selection of digital publications - created using Adobe InDesign.</p>
        <ResourceCards itemsInRow={this.props.perRow} resourceCards={cards} />
      </Segment>
    )
  }
});

module.exports = DigitalPublication;
