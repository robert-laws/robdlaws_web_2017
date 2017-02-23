var React = require('react');
var Image = require('Image');

var ImageLoader = React.createClass({
  getInitialState: function() {
    return {
      imgCount: 12
    }
  },
  render: function() {
    // var {message} = this.props;
    // if(message == 'bottom') {
    //   this.setState({
    //     imgCount: imgCount * 2
    //   })
    // }
    //
    // var imgC = this.state.imgCount;
    // console.log(message);
    //
    var {images} = this.props;

    var imageList = images.map((image) =>
      <Image key={image.id} title={image.title} url={image.url} />
    )

    // var imgList = images.map(function(img) {
    //   if(img.id <= imgC && message != 'bottom') {
    //     debugger;
    //     <Image key={img.id} title={img.title} url={img.url} />
    //   } else {
    //     <Image key={img.id} title={img.title} url={img.url} />
    //   }
    // });

    return (
      <div id="columns">
        {imageList}
      </div>
    )
  }
});

module.exports = ImageLoader;
