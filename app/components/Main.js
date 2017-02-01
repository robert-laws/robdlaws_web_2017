var React = require('react');
var Nav = require('Nav');
var Footer = require('Footer');
var styles = require('./../styles/ui.scss')

var Main = React.createClass({
  render: function () {
    return (
      <div>
        <Nav location={this.props.location.pathname} />
        {this.props.children}
        <Footer />
			</div>
    );
  }
});

module.exports = Main;
