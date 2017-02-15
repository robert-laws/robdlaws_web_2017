// presentational

var React = require('react');
var FrontEnd = require('FrontEnd');
var BackEnd = require('BackEnd');
var ContentManagement = require('ContentManagement');
var { Container, Header, Divider } = require('semantic-ui-react');

var Development = (props) => {
  return (
    <Container id="topDiv">
        <h1>Development</h1>
        <Divider />
        <FrontEnd />
        <BackEnd />
        <ContentManagement />
    </Container>
  )
}

module.exports = Development;
