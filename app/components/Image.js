var React = require('react');
var { Button, Header, Image, Modal } = require('semantic-ui-react');
var ModalButton = require('ModalButton');

var Image = React.createClass({
  render: function() {
    var { title, desc, url } = this.props;
    var urlSource = url;
    return (
      <div>
        <ModalButton imageSource={urlSource} imageDesc={desc} imageTitle={title} />
      </div>
    )
  }
});

module.exports = Image;
