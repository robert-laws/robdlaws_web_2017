var React = require('react');
var { Card } = require('semantic-ui-react');
var ResourceCard = require('ResourceCard');

var ResourceCards = React.createClass({
  getInitialState: function() {
    return {
      items: []
    }
  },
  componentDidMount: function() {
    var {resourceCards} = this.props;
    var getCards = resourceCards.map(function(card) {
      return <ResourceCard key={card.id} title={card.title} subTitle={card.subTitle} desc={card.desc} link={card.link} imgSrc={card.imgSrc} />;
    });

    this.setState({
      items: getCards
    });
  },
  render: function() {
    return (
      <Card.Group itemsPerRow={6} stackable>
        {this.state.items}
      </Card.Group>
    )
  }
});

module.exports = ResourceCards;
