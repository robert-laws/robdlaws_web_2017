var React = require('react');
var Image = require('Image');
var { Loader } = require('semantic-ui-react');

var Gallery = React.createClass({
  getInitialState: function() {
    return {
      init: true,
      message: '',
      imgCount: 12,
      scroll_loader: 'loader_inactive',
      items: []
    }
  },
  handleScroll: function(event) {
    var h = document.body.offsetHeight;
    var st = document.body.scrollTop;
    var sh = document.body.scrollHeight
    var newST = st;

    if(h + newST >= sh && this.state.init != true) {
      this.setState({
        message: 'bottom',
        imgCount: this.state.imgCount + 12
      });

      var {images} = this.props;
      var count = this.state.imgCount;
      var moreImages = images.map(function(image) {
        if(image.id <= count) {
          return <Image key={image.id} title={image.title} url={image.url} />;
        }
      });

      this.setState({
        scroll_loader: 'loader_active'
      });

      this.delayState(moreImages);
    } else {
      this.setState({
        message: 'scroll',
        scroll_loader: 'loader_inactive'
      });
    }
  },
  delayState: function(imgs) {
    setTimeout(() => {
      this.setState({
        items: imgs,
        scroll_loader: 'loader_inactive'
      });
    }, 2400);
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
        <div>&nbsp;</div>
        <div className={this.state.scroll_loader}>
          <Loader active inline='centered' />
        </div>
      </div>
    )
  }
});

module.exports = Gallery;
