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
var Blog = require('Blog');
var FourFootedFriends = require('FourFootedFriends');
var Page404 = require('Page404');
// extra
var Chapter3 = require('Chapter3');
var FindPercentage = require('FindPercentage');
var CompoundInterest = require('CompoundInterest');
var CompoundingFrequencies = require('CompoundingFrequencies');
var SolveRateTime = require('SolveRateTime');
var RuleOf72 = require('RuleOf72');
var EffectiveRate = require('EffectiveRate');

ReactDOM.render(
<<<<<<< HEAD
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
      <Route path="four-footed-friends" component={FourFootedFriends} />
      <Route path="*" component={Page404} />
    </Route>
  </Router>,
  document.getElementById('app')
=======
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
    <Route path="chapter3" component={Chapter3}>
      <Route path="compound-interest" component={CompoundInterest} />
      <Route path="compounding-frequencies" component={CompoundingFrequencies} />
      <Route path="solve-rate-time" component={SolveRateTime} />
      <Route path="rule-of-72" component={RuleOf72} />
    <Route path="effective-rate" component={EffectiveRate} />
      <Route path="find-percentage" component={FindPercentage} />
    </Route>

    <Route path="*" component={Page404} />
  </Route>
</Router>,
document.getElementById('app')
>>>>>>> 5f26009f9930b0fd32a80c4dec54c68571829d2c
);
