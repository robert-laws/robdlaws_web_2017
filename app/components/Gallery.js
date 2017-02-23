var React = require('react');
var Image = require('Image');

var Gallery = React.createClass({
  getInitialState: function() {
    return {
      init: true,
      message: '',
      imgCount: 12,
      items: []
    }
  },
  handleScroll: function(event) {
    var h = document.body.offsetHeight;
    var st = document.body.scrollTop;
    var sh = document.body.scrollHeight;

    if(h + st == sh && this.state.init != true) {
      this.setState({
        message: 'bottom',
        imgCount: this.state.imgCount + 12
      });

      debugger;
      var {images} = this.props;
      var count = this.state.imgCount;
      var moreImages = images.map(function(image) {
        if(image.id <= count) {
          return <Image key={image.id} title={image.title} url={image.url} />;
        }
      });

      this.setState({
        items: moreImages
      });
    } else {
      this.setState({
        message: 'scroll'
      });
    }
  },
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);

    var {images} = this.props;
    var initImages = images.map(function(image) {
      if(image.id <= 12) {
        return <Image key={image.id} title={image.title} url={image.url} />;
      }
    });

    this.setState({
      message: 'scroll',
      init: false,
      items: initImages
    });
  },
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  render: function() {
    return (
      <div>
        <div id="columns">
          {this.state.items}
        </div>
        <div>{this.state.message} {this.state.imgCount}</div>
      </div>
    )
  }
});

module.exports = Gallery;
