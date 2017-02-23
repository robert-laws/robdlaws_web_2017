var React = require('react');

var ScrollWrapper = React.createClass({
  getInitialState: function() {
    return {
      message: ''
    }
  },
  handleScroll: function(event) {
    var h = document.body.offsetHeight;
    var st = document.body.scrollTop;
    var sh = document.body.scrollHeight;

    if(h + st == sh) {
      this.setState({
        message: 'at the bottom'
      });
      console.log("OffSetHeight: " + h + " ScrollTop:" + st + " ScrollHeight:" + sh);
    } else {
      this.setState({
        message: 'scrolling...'
      });
      console.log("OffSetHeight: " + h + " ScrollTop:" + st + " ScrollHeight:" + sh);
    }

    //console.log(event);

    // var windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    // var body = document.body;
    // var html = document.documentElement;
    // var docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    // var windowBottom = windowHeight + window.PageYOffset;
    // if(windowBottom >= docHeight) {
    //   this.setState({
    //     message: 'reached the bottom'
    //   });
    //   console.log(message);
    // } else {
    //   this.setState({
    //     message: 'not at the bottom'
    //   });
    //   console.log(message);
    // }
  },
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  render: function() {
    return (
      <div>
        <div className="fixedDiv">{this.state.message}</div>
        <div className="scrollDiv"></div>
      </div>
    )
  }
});

module.exports = ScrollWrapper;
