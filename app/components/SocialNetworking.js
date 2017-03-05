var React = require('react');
var { Container, Header, Divider } = require('semantic-ui-react');
var ResourceCards = require('ResourceCards');

import {cards} from './../data/cards/social.json';

var SocialNetworking = React.createClass({
  render() {
    return (
      <Container id="topDiv">
        <Header as="h1">Social Networking</Header>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <Divider />
        <ResourceCards resourceCards={cards} />
      </Container>
    )
  }
});

module.exports = SocialNetworking;
