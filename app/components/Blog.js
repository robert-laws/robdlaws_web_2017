// interactive

var React = require('react');
var { Container, Segment, Header, Icon, Label, Divider } = require('semantic-ui-react');

var Blog = React.createClass({
    render: function() {
      return (
          <Container id="topDiv">
            <Header as="h1">Blog</Header>
            <Divider />
            <Header as='h2' attached='top' color='blue'>
              <Icon name='write' />
              <Header.Content>Preparing to visit Dubai
                <Label color="teal" className='blogDate'>
                  <Icon name='calendar' /> Posted on March 8, 2017
                </Label>
              </Header.Content>
            </Header>
            <Segment attached>
              <p>On Thursday, March 8th, I'll be traveling to Dubai to take part in the Emirates Literary Festival. It is an exciting opportunity to listen to local and regional authors discuss their work and writing process. I am particularly interested in the Science Fiction writers from the region. I want to learn how they meld their life experiences with what is typically understood to be writing in the Science Fiction genre.</p>
              <p>The <a href="http://www.emirateslitfest.com/">Emirates Literacy Festival</a> has been a major event since 2009 and is getting bigger every year.</p>
            </Segment>
          </Container>
      )
    }
});

module.exports = Blog;
