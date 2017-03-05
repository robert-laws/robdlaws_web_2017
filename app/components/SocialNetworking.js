// presentational

var React = require('react');
<<<<<<< HEAD
var { Container, Header, Divider } = require('semantic-ui-react');
var ResourceCard = require('ResourceCard');

var SocialNetworking = React.createClass({
  getInitialState: function() {
    return {
      items: []
    }
  },
  componentDidMount: function() {
    var {cards} = this.props;
    var getCards = cards.map(function(card) {
      return <ResourceCard key={card.id} title={card.title} subTitle={card.subTitle} desc={card.desc} link={card.link} imgSrc={card.imgSrc} />;
    });

    this.setState({
      items: getCards
    });
  },
  render() {
    var {cards} = this.props;
    return (
      <Container id="topDiv">
        <Header as="h1">Social Networking</Header>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <Divider />
        {this.state.items}
      </Container>
    )
  }
=======
var { Container, Header } = require('semantic-ui-react');

var SocialNetworking = React.createClass({
    render() {
        return (
            <Container id="topDiv">
                <Header as="h1">Social Networking</Header>
            </Container>
        )
    }
>>>>>>> parent of aef9faa... begin preparing cards - social networking
});

module.exports = SocialNetworking;
