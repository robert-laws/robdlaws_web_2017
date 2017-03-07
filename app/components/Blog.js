// interactive

var React = require('react');
var { Container, Header, Divider } = require('semantic-ui-react');
var ModalButton = require('ModalButton');

var Blog = React.createClass({
    render: function() {
      var imgSrc = "IMG-233.JPG";
      return (
          <Container id="topDiv">
            <Header as="h1">Blog</Header>
            <ModalButton imageSource={"travel/" + imgSrc} imageTitle="London Bridge" />
            <Divider />
          </Container>
      )
    }
});

module.exports = Blog;
