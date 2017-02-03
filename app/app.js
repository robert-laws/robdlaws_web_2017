var React = require('react');
var ReactDOM = require('react-dom');
var { Route, Router, IndexRoute, hashHistory } = require('react-router');

var Main = require('Main');
var Home = require('Home');
var FrontEnd = require('FrontEnd');
var BackEnd = require('BackEnd');
var BackEnd = require('BackEnd');
var Design = require('Design');
var DataVisualization = require('DataVisualization');
var Podcasts = require('Podcasts');
var Websites = require('Websites');
var Learning = require('Learning');
var TravelPhotos = require('TravelPhotos');
var FunPhotos = require('FunPhotos');
var About = require('About');
var Resume = require('Resume');
var SocialNetworking = require('SocialNetworking');
var FourFootedFriends = require('FourFootedFriends');
var Page404 = require('Page404');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Home} />
            <Route path="front-end-development" component={FrontEnd} />
            <Route path="front-end-development" component={FrontEnd} />
            <Route path="back-end-development" component={BackEnd} />
            <Route path="design" component={Design} />
            <Route path="data-visualization" component={DataVisualization} />
            <Route path="podcasts" component={Podcasts} />
            <Route path="websites" component={Websites} />
            <Route path="learning" component={Learning} />
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
