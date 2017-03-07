var React = require('react');
var { Container, Segment, Divider, Header } = require('semantic-ui-react');
var ResourceCards = require('ResourceCards');

import {cards} from './../data/cards/ides.json';

var IDEs = React.createClass({
  render: function() {
    return (
      <Container id="topDiv">
        <Header as="h1">IDEs (Integrated Development Environments) for Web Development</Header>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <Divider />
        <Segment className="subContent" basic>
          <Header as="h3">My Favorite IDEs</Header>
          <ResourceCards itemsInRow={6} resourceCards={cards} />
        </Segment>
      </Container>
    )
  }
});

module.exports = IDEs;
