// presentational

var React = require('react');
var { Segment, Header } = require('semantic-ui-react');
var ResourceCards = require('ResourceCards');

import {cards} from './../data/cards/frontEnd.json';

var FrontEnd = React.createClass({
  render() {
    return (
      <Segment className="subContent" basic>
        <Header as="h3">Front-End Development</Header>
        <p>Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application so that a user can see and interact with them directly.</p>
        <ResourceCards itemsInRow={this.props.perRow} resourceCards={cards} />
      </Segment>
    )
  }
});

module.exports = FrontEnd;
