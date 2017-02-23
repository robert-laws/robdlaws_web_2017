var React = require('react');
var ReactDOM = require('react-dom');
import { Route, Router, IndexRoute, hashHistory, browserHistory } from 'react-router';
import { createHashHistory } from 'history';
import './../semantic/dist/semantic.min.css';
import './styles/ui.scss';

var Main = require('Main');
var Home = require('Home');
var FrontEnd = require('FrontEnd');
var BackEnd = require('BackEnd');
var BackEnd = require('BackEnd');
var ContentManagement = require('ContentManagement');
var Development = require('Development');
var Design = require('Design');
var Prototypes = require('Prototypes');
var WebGraphics = require('WebGraphics');
var DigitalPublications = require('DigitalPublications');
var DataVisualization = require('DataVisualization');
var WebTech = require('WebTech');
var Podcasts = require('Podcasts');
var Websites = require('Websites');
var Learning = require('Learning');
var TravelPhotos = require('TravelPhotos');
var FunPhotos = require('FunPhotos');
var About = require('About');
var Resume = require('Resume');
var SocialNetworking = require('SocialNetworking');
var Blog = require('Blog');
var FourFootedFriends = require('FourFootedFriends');
var Page404 = require('Page404');

ReactDOM.render(
  <Router history={hashHistory} onUpdate={() => window.scrollTo(0, 0)}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home} />
      <Route path="development" component={Development}>
        <Route path="front-end-development" component={FrontEnd} />
        <Route path="back-end-development" component={BackEnd} />
        <Route path="content-management" component={ContentManagement} />
      </Route>
      <Route path="design" component={Design}>
        <Route path="prototypes" component={Prototypes} />
        <Route path="web-graphics" component={WebGraphics} />
        <Route path="digital-publications" component={DigitalPublications} />
      </Route>
      <Route path="data-visualization" component={DataVisualization} />
      <Route path="web-tech" component={WebTech}>
        <Route path="podcasts" component={Podcasts} />
        <Route path="websites" component={Websites} />
        <Route path="learning" component={Learning} />
      </Route>
      <Route path="travel-photos" component={TravelPhotos} />
      <Route path="fun-photos" component={FunPhotos} />
      <Route path="about" component={About} />
      <Route path="resume" component={Resume} />
      <Route path="social-networking" component={SocialNetworking} />
      <Route path="blog" component={Blog} />
      <Route path="four-footed-friends" component={FourFootedFriends} />
      <Route path="*" component={Page404} />
    </Route>
  </Router>,
  document.getElementById('app')
);
