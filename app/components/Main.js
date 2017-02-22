var React = require('react');
var WebMenu = require('WebMenu');
var Footer = require('Footer');

var Main = React.createClass({
  render: function () {
    return (
      <div>
        <WebMenu location={this.props.location.pathname} />
        {this.props.children}
        <Footer />
			</div>
    );
  }
});

module.exports = Main;
