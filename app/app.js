var React = require('react');
var ReactDOM = require('react-dom');
var { Route, Router, IndexRoute, hashHistory } = require('react-router');

var Main = require('Main');
var Home = require('Home');
var FrontEnd = require('FrontEnd');
var About = require('About');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home} />
      <Route path="front-end-development" component={FrontEnd} />
      <Route path="about" component={About} />
    </Route>
  </Router>,
  document.getElementById('app')
);
