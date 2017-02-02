var React = require('react');
var { Link } = require('react-router');
var { Container, Header, Divider, Segment, Message, Image, Icon } = require('semantic-ui-react');

var Home = React.createClass({
    render() {
        return (
            <div>
                <Segment vertical className="stripe">
                    <Container className="middle aligned stackable grid">
                        <div className="row">
                            <div className="eight wide column">
                                <Header as="h3">Information Science and Web Development</Header>
                                <p>With years of experience in libraries working with IT and Web Design, I have the technical skills of a developer and the experience of working and engaging with a wide variety of technical and non-technical people.</p>
                                <Divider hidden />
                                <Message size="large" icon color="olive">
                                    <Icon name="world" />
                                    <Message.Content>
                                        <Message.Header>Global Focus</Message.Header>
                                        <p className="smallerText">-- Living and working overseas for 8+ years has prepared me for out of the ordinary challenges.</p>
                                    </Message.Content>										
                                </Message>
                            </div>
                            <div className="six wide right floated column">
                                <Image src="images/rdl_home.jpg" size="large" bordered className="rounded" />
                            </div>
                        </div>
                    </Container>
                </Segment>

                <Segment vertical className="stripe quote">
                    <div className="ui equal width stackable internally celled grid">
                        <div className="center aligned row">
                            <div className="column">
                                <h3>"React is, in our opinion, the premier way to build big, fast Web apps with JavaScript."</h3>
                                <p>-- React Team</p>
                            </div>
                            <div className="column">
                                <h3>"Utilizing cutting-edge technologies to push the boundaries"</h3>
                                <p>
                                    <img src="images/reactjs.png" className="ui circular tiny middle aligned image" /> <b>ReactJS</b> - Modern Website Development
                                </p>
                            </div>
                        </div>
                    </div>
                </Segment>

                <Segment vertical className="stripe">
                    <Container text>
                        <Header as="h3">
                            Front-End Web Development
                        </Header>
                        <p>With a strong focus on usability and attractive design, my work on front-end development doesn't ignore the interests users have in having an eye-pleasing experience online. Attractiveness and usability are essential components to making the web fun. This is all built upon good technical front-end structuring.</p>
                        <Link className="ui large button" to="/front-end-development"> Front-End Development</Link>
                        <Divider hidden />
                        <Divider />
                        <Header as="h3">Photography</Header>
                        <p>For fun, photography is a past-time I enjoy. I've been to many places, mostly in Europe, and taken a lot of photos. Take a look at a sample of what I've been able to capture.</p>
                        <Link className="ui large button" to="/front-end-development"> Front-End Development</Link>
                    </Container>
                </Segment>
            </div>
        )
    }
});

module.exports = Home;
