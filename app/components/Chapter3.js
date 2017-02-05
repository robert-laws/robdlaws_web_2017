var React = require('react');
var { Container, Segment, Header, Divider, Label, Form, Input, Button } = require('semantic-ui-react');
// import { Button, Checkbox, Form, Input, Message, Radio, Select, TextArea } from 'semantic-ui-react'
var FindPercentage = require('FindPercentage');
var CompoundInterest = require('CompoundInterest');
var CompoundingFrequencies = require('CompoundingFrequencies');
var SolveRateTime = require('SolveRateTime');
var RuleOf72 = require('RuleOf72');
var EffectiveRate = require('EffectiveRate');

var Chapter3 = React.createClass({
  render() {
    return (
        <div>
          <CompoundInterest />
          <CompoundingFrequencies />
          <SolveRateTime />
          <RuleOf72 />
          <EffectiveRate />
          <FindPercentage />
        </div>
      )
    }
  });

module.exports = Chapter3;
