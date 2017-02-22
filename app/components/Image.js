var React = require('react');
var { Button, Header, Image, Modal } = require('semantic-ui-react');
var ModalButton = require('ModalButton');

var Image = React.createClass({
  render: function() {
    var { title, url } = this.props;
    var urlSource = url;
    return (
      <figure>
        <ModalButton imageSource={urlSource} imageTitle={title} />
        <figcaption>{title}</figcaption>
      </figure>
    )
  }
});

module.exports = Image;
