// presentational

var React = require('react');
var { Container, Header } = require('semantic-ui-react');
var ResourceCards = require('ResourceCards');

import {cards} from './../data/cards/ContentManagement.json';

var ContentManagement = React.createClass({
    render() {
        return (
            <Container className="subContent">
                <Header as="h3">Content Management Systems Development</Header>
                <p>A content management system (CMS) is a computer application that supports the creation and modification of digital content. It is often used to support multiple users working in a collaborative environment. CMS features vary widely. Most CMSs include Web-based publishing, format management, history editing and version control, indexing, search, and retrieval. By their nature, content management systems support the separation of content and presentation.</p>
                <ResourceCards itemsInRow={this.props.perRow} resourceCards={cards} />
            </Container>
        )
    }
});

module.exports = ContentManagement;
