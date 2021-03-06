// presentational

var React = require('react');
var { Segment, Header } = require('semantic-ui-react');
var ResourceCards = require('ResourceCards');

import {cards} from './../data/cards/backEnd.json';

var BackEnd = React.createClass({
  render() {
    return (
      <Segment className="subContent" basic>
        <Header as="h3">Back-End Development</Header>
        <p>The backend of an application is responsible for things like calculations, business logic, database interactions, and performance. Most of the code that is required to make an application work will be done on the backend. Backend code is run on the server, as opposed to the client. </p>
        <ResourceCards itemsInRow={this.props.perRow} resourceCards={cards} />
      </Segment>
    )
  }
});

module.exports = BackEnd;
