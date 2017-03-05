var React = require('react');
var { Divider, Button, Header, Image, Modal } = require('semantic-ui-react');

var ModalButton = React.createClass({
  render: function() {
    var { imageTitle, imageSource } = this.props;
    var img = '/photos/' + imageSource;
    return (
      <Modal trigger={<Image className="imgForModal" src={img} fluid bordered shape='rounded' />}>
        <Modal.Header>{imageTitle}</Modal.Header>
        <Modal.Content image>
          <Image className="imageFile" wrapped centered size='massive' src={img} />
        </Modal.Content>
        <Header className="imageDescription" as="h4">Image Description Will Go Here</Header>
      </Modal>
    )
  }
});

module.exports = ModalButton;
