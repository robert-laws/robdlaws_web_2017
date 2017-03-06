// presentational

var React = require('react');
var FrontEnd = require('FrontEnd');
var BackEnd = require('BackEnd');
var ContentManagement = require('ContentManagement');
var { Container, Header, Divider } = require('semantic-ui-react');

var Development = () => {
  return (
    <Container id="topDiv">
        <Header as="h1">Development</Header>
        <p>Web Development in 2017 requires a high level of technical and visual skills. Early in the 21st century, web development required painstaking work to create HTML pages and add styling with CSS. Large projects meant huge numbers of files and code that was written independently. Although technologies like Cold Fusion and .Net helped somewhat reduce code replication, there was still a lot to keep track of from project to project (not to mention dealing with compatability issues during the browser wars). The advent of CSS Frameworks, MVC Architecture, Package and Task Managers was meant to make the life of developers easier, and it has. However, it has also created a technical hurdle that prevents pure hobbists from diving head first into all but the most basic of web development technologies. Content Management Systems like WordPress have helped tear down some barriers, but even WordPress requires higher-level skills to produce a polished and professional end-product.</p>
        <p>The good news is that for those individuals who are willing to learn the skills necessary to become an expert, or at the very least least a highly proficient amateur, their skills are in demand. The job of Web Developer commonly heads the list of hot jobs and is one of the in-demand skills in the 21st century workforce.</p>
        <p>Listed below are top technologies within Front-End, Back-End, and Content Management System development.</p>
        <Divider />
        <FrontEnd perRow={6} />
        <BackEnd perRow={6} />
        <ContentManagement perRow={6} />
    </Container>
  )
}

module.exports = Development;
