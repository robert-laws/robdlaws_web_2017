var React = require('react');
var { Card, Image } = require('semantic-ui-react');

var ResourceCard = React.createClass({
  render: function() {
    var { title, subTitle, desc, link, imgSrc } = this.props;
    return (
      <Card>
        <Image src={'images/' + imgSrc} />
        <Card.Content>
          <Card.Header>
            <a href={link} target='_blank'>{title}</a>
          </Card.Header>
          <Card.Meta>
            <span className='date'>
              {subTitle}
            </span>
          </Card.Meta>
          <Card.Description>
            {desc}
          </Card.Description>
        </Card.Content>
      </Card>
    )
  }
});

module.exports = ResourceCard;
