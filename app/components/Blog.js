// interactive

var React = require('react');
var { Container, Header, Divider } = require('semantic-ui-react');
var ModalButton = require('ModalButton');

var Blog = React.createClass({
    render: function() {
      var imgSrc = "IMG_1783.jpg";
      return (
          <Container id="topDiv">
            <Header as="h1">Blog</Header>
            <ModalButton imageSource={imgSrc} />
            <Divider />
          </Container>
      )
    }
});

module.exports = Blog;
