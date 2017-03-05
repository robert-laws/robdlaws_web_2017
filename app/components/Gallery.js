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
      items1: [],
      items2: [],
      items3: []
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
      var moreImages1 = images.map(function(image) {
        if(image.id <= count) {
          if(image.id % 3 == 1) {
            return <Image key={image.id} title={image.title} url={image.url} />;
          }
        }
      });

      var moreImages2 = images.map(function(image) {
        if(image.id <= count) {
          if(image.id % 3 == 2) {
            return <Image key={image.id} title={image.title} url={image.url} />;
          }
        }
      });

      var moreImages3 = images.map(function(image) {
        if(image.id <= count) {
          if(image.id % 3 == 0) {
            return <Image key={image.id} title={image.title} url={image.url} />;
          }
        }
      });

      this.setState({
        scroll_loader: 'loader_active'
      });

      this.delayState(moreImages1, moreImages2, moreImages3);
    } else {
      this.setState({
        message: 'scroll',
        scroll_loader: 'loader_inactive'
      });
    }
  },
  delayState: function(imgs1, imgs2, imgs3) {
    setTimeout(() => {
      this.setState({
        items1: imgs1,
        items2: imgs2,
        items3: imgs3,
        scroll_loader: 'loader_inactive'
      });
    }, 2400);
  },
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);

    var {images} = this.props;
    var initImages1 = images.map(function(image) {
      if(image.id <= 12) {
        if(image.id % 3 == 1)
        return <Image key={image.id} title={image.title} url={image.url} />;
      }
    });
    var initImages2 = images.map(function(image) {
      if(image.id <= 12) {
        if(image.id % 3 == 2)
        return <Image key={image.id} title={image.title} url={image.url} />;
      }
    });
    var initImages3 = images.map(function(image) {
      if(image.id <= 12) {
        if(image.id % 3 == 0)
        return <Image key={image.id} title={image.title} url={image.url} />;
      }
    });

    this.setState({
      message: 'scroll',
      init: false,
      items1: initImages1,
      items2: initImages2,
      items3: initImages3,
    });
  },
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  render: function() {
    return (
      <div className="ui top aligned three column centered relaxed grid gallery stackable">
        <div className="row">
          <div className="column">
            {this.state.items1}
          </div>
          <div className="column">
            {this.state.items2}
          </div>
          <div className="column">
            {this.state.items3}
          </div>
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
