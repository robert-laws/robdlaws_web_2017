var React = require('react');
var { Container, Segment, Header, Divider, Label, Form, Input, Button } = require('semantic-ui-react');
// import { Button, Checkbox, Form, Input, Message, Radio, Select, TextArea } from 'semantic-ui-react'
var FindPercentage = require('FindPercentage');
var CompoundInterest = require('CompoundInterest');
var CompoundingFrequencies = require('CompoundingFrequencies');
var SolveRateTime = require('SolveRateTime');
var RuleOf72 = require('RuleOf72');
var EffectiveRate = require('EffectiveRate');
var SimpleInterest = require('SimpleInterest');
var SimpleDiscount = require('SimpleDiscount');
var SimpleDiscountFormula = require('SimpleDiscountFormula');
var ArithmeticSequences = require('ArithmeticSequences');
var GeometricSequences = require('GeometricSequences');

var Chapter3 = React.createClass({
  render() {
    return (
        <div>
          <Container id="onlyTopDiv">
            <Header as="h1">Chapter 1</Header>
          </Container>
          <SimpleInterest />
            <Container id="onlyTopDiv">
              <Header as="h1">Chapter 2</Header>
            </Container>
            <SimpleDiscount />
            <SimpleDiscountFormula />
          <Container id="onlyTopDiv">
            <Header as="h1">Chapter 3</Header>
          </Container>
          <CompoundInterest />
          <CompoundingFrequencies />
          <SolveRateTime />
          <EffectiveRate />
          <RuleOf72 />
          <Container id="onlyTopDiv">
            <Header as="h1">Sequences</Header>
          </Container>
          <ArithmeticSequences />
          <GeometricSequences />
          <Container id="onlyTopDiv">
            <Header as="h1">Utilities</Header>
          </Container>
          <FindPercentage />
        </div>
      )
    }
  });

module.exports = Chapter3;
