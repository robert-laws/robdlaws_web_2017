var React = require('react');
var { Dropdown, Icon, Menu, Divider, Container, Button } = require('semantic-ui-react');

var DropdownExamplePointing = React.createClass({
  render: function() {
    return (
      <Container>
        <Menu inverted>
          <Menu.Item>
            Home
          </Menu.Item>
          <Dropdown text='Shopping' pointing className='link item'>
            <Dropdown.Menu>
              <Dropdown.Header>Categories</Dropdown.Header>
              <Dropdown.Item>
                <Icon name='dropdown' />
                <span className='text'>Clothing</span>
                <Dropdown.Menu>
                  <Dropdown.Header>Mens</Dropdown.Header>
                  <Dropdown.Item>Shirts</Dropdown.Item>
                  <Dropdown.Item>Pants</Dropdown.Item>
                  <Dropdown.Item>Jeans</Dropdown.Item>
                  <Dropdown.Item>Shoes</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Header>Womens</Dropdown.Header>
                  <Dropdown.Item>Dresses</Dropdown.Item>
                  <Dropdown.Item>Shoes</Dropdown.Item>
                  <Dropdown.Item>Bags</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown.Item>
              <Dropdown.Item>Home Goods</Dropdown.Item>
              <Dropdown.Item>Bedroom</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Header>Order</Dropdown.Header>
              <Dropdown.Item>Status</Dropdown.Item>
              <Dropdown.Item>Cancellations</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item>
            Forums
          </Menu.Item>
          <Menu.Item>
            Contact Us
          </Menu.Item>
        </Menu>

        <Divider />

        <Menu size='small'>
          <Dropdown item text='Location'>
            <Dropdown.Menu>
              <Dropdown.Item icon='edit' text='Edit Profile' />
              <Dropdown.Item icon='globe' text='Choose Language' />
              <Dropdown.Item icon='settings' text='Account Settings' />
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown item text='Destination'>
            <Dropdown.Menu>
              <Dropdown.Item>
                <Icon name='globe' />
                <span className='text'>New Item</span>
              </Dropdown.Item>
              <Dropdown.Item>
                <Icon name='settings' />
                <span className='text'>Stuff</span>
              </Dropdown.Item>
              <Dropdown.Item>
                <Icon name='edit' />
                <span className='text'>Ideas and more</span>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Menu position='right'>
            <Dropdown item text='Language'>
              <Dropdown.Menu>
                <Dropdown.Item>English</Dropdown.Item>
                <Dropdown.Item>Russian</Dropdown.Item>
                <Dropdown.Item>Spanish</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Menu.Item>
              <Button primary>Sign Up</Button>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Container>
    )
  }
});

module.exports = DropdownExamplePointing;
