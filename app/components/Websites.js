// presentational

var React = require('react');
var { Segment, Header } = require('semantic-ui-react');
var ResourceCards = require('ResourceCards');

import {cards} from './../data/cards/websites.json';

var Websites = React.createClass({
  render() {
    return (
      <Segment className="subContent" basic>
        <Header as="h3">Websites</Header>
        <p>These are some of the websites I visit when looking for design inspiration and how new functionality is being used on websites.</p>
        <ResourceCards itemsInRow={this.props.perRow} resourceCards={cards} />
      </Segment>
    )
  }
});

module.exports = Websites;
