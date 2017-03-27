var React = require('react');
var Image = require('Image');
var { Loader, Button } = require('semantic-ui-react');

var Gallery = React.createClass({
  getInitialState: function() {
    return {
      init: true,
      message: '',
      imgCount: 12,
      scroll_loader: 'loader_active',
      items1: [],
      items2: [],
      items3: []
    }
  },
  // handleScroll: function(event) {
  //   var h = document.body.offsetHeight;
  //   var st = document.body.scrollTop;
  //   var sh = document.body.scrollHeight
  //   var newST = st;
  //
  //   if(h + newST >= sh && this.state.init != true) {
  //     this.setState({
  //       message: 'bottom',
  //       imgCount: this.state.imgCount + 12
  //     });
  //
  //     var {images} = this.props;
  //     var {location} = this.props;
  //     var count = this.state.imgCount;
  //     var moreImages1 = images.map(function(image) {
  //       if(image.id <= count) {
  //         if(image.id % 3 == 1) {
  //           return <Image key={image.id} title={image.title} desc={image.desc} url={location + "/" + image.url} />;
  //         }
  //       }
  //     });
  //
  //     var moreImages2 = images.map(function(image) {
  //       if(image.id <= count) {
  //         if(image.id % 3 == 2) {
  //           return <Image key={image.id} title={image.title} desc={image.desc} url={location + "/" + image.url} />;
  //         }
  //       }
  //     });
  //
  //     var moreImages3 = images.map(function(image) {
  //       if(image.id <= count) {
  //         if(image.id % 3 == 0) {
  //           return <Image key={image.id} title={image.title} desc={image.desc} url={location + "/" + image.url} />;
  //         }
  //       }
  //     });
  //
  //     this.setState({
  //       scroll_loader: 'loader_active'
  //     });
  //
  //     this.delayState(moreImages1, moreImages2, moreImages3);
  //   } else {
  //     this.setState({
  //       message: 'scroll',
  //       scroll_loader: 'loader_inactive'
  //     });
  //   }
  // },
  // delayState: function(imgs1, imgs2, imgs3) {
  //   setTimeout(() => {
  //     this.setState({
  //       items1: imgs1,
  //       items2: imgs2,
  //       items3: imgs3,
  //       scroll_loader: 'loader_inactive'
  //     });
  //   }, 2400);
  // },
  clickHandler: function clickHandler(event) {
    event.preventDefault();
    var c = this.state.imgCount;

    var {images} = this.props;
    var {location} = this.props;

    if(c == 12) {
      this.setState({
        imgCount: 24
      });
    } else {
      this.setState({
        imgCount: this.state.imgCount + 12
      });
    }

    var count = this.state.imgCount;
    var moreImages1 = images.map(function(image) {
      if(image.id <= count) {
        if(image.id % 3 == 1) {
          return <Image key={image.id} title={image.title} desc={image.desc} url={location + "/" + image.url} />;
        }
      }
    });

    var moreImages2 = images.map(function(image) {
      if(image.id <= count) {
        if(image.id % 3 == 2) {
          return <Image key={image.id} title={image.title} desc={image.desc} url={location + "/" + image.url} />;
        }
      }
    });

    var moreImages3 = images.map(function(image) {
      if(image.id <= count) {
        if(image.id % 3 == 0) {
          return <Image key={image.id} title={image.title} desc={image.desc} url={location + "/" + image.url} />;
        }
      }
    });

    this.setState({
      items1: moreImages1,
      items2: moreImages2,
      items3: moreImages3
    });

    if(images.length <= this.state.imgCount) {
      this.setState({
        scroll_loader: 'loader_inactive'
      });
    }
  },
  componentDidMount() {
    // window.addEventListener("scroll", this.handleScroll);

    var {images} = this.props;
    var {location} = this.props;

    var initImages1 = images.map(function(image) {
      if(image.id <= 12) {
        if(image.id % 3 == 1)
        return <Image key={image.id} title={image.title} desc={image.desc} url={location + "/" + image.url} />;
      }
    });
    var initImages2 = images.map(function(image) {
      if(image.id <= 12) {
        if(image.id % 3 == 2)
        return <Image key={image.id} title={image.title} desc={image.desc} url={location + "/" + image.url} />;
      }
    });
    var initImages3 = images.map(function(image) {
      if(image.id <= 12) {
        if(image.id % 3 == 0)
        return <Image key={image.id} title={image.title} desc={image.desc} url={location + "/" + image.url} />;
      }
    });

    this.setState({
      init: false,
      items1: initImages1,
      items2: initImages2,
      items3: initImages3,
      imgCount: 24
    });
  },
  componentWillUnmount() {
    // window.removeEventListener("scroll", this.handleScroll);
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
        <div className="row">
          <Button className={this.state.scroll_loader} primary fluid onClick={this.clickHandler}>Load More Images</Button>
        </div>
      </div>
    )
  }
});

module.exports = Gallery;
