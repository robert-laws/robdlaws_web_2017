// interactive

var React = require('react');
var { Container, Header, Divider } = require('semantic-ui-react');
var ModalButton = require('ModalButton');

var Blog = React.createClass({
    render: function() {
      var imgSrc = "IMG-0383.JPG";
      return (
          <Container id="topDiv">
            <Header as="h1">Blog</Header>
            <ModalButton imageSource={imgSrc} imageTitle="Photo of Nature" />
            <Divider />
          </Container>
      )
    }
});

module.exports = Blog;
