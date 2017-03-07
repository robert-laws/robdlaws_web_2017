// interactive

var React = require('react');
var { Container, Segment, Header, Divider } = require('semantic-ui-react');
var ResourceCards = require('ResourceCards');

import {cards} from './../data/cards/dataVisualizations.json';

var DataVisualization = React.createClass({
  render() {
    return (
      <Container id="topDiv">
        <Header as="h1">Data Visualization</Header>
        <p>The words Big Data are all over the headlines these days - but how many people are able, or would want, to try to analyze Big Data in it's raw format? That's where data visualization come in. There is a range of ways of visualize data - using graphs, on maps, or with interactive dashboards, just to name a few.</p>
        <p>Listed below are a portfolio of different data visualization tools and software.</p>
        <Divider />
        <Segment className="subContent" basic>
          <Header as="h3">Tools for Creating Data Visualizations</Header>
          <ResourceCards itemsInRow={6} resourceCards={cards} />
        </Segment>
      </Container>
    )
  }
});

module.exports = DataVisualization;
