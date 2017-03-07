var React = require('react');
var { Link, IndexLink } = require('react-router');
var { Icon, Dropdown } = require('semantic-ui-react');

var WebMenu = React.createClass({
    getDefaultProps() {
        return {
            img: ['hm_01', 'hm_02', 'hm_03', 'hm_04', 'hm_05', 'hm_06'],
            rand: Math.floor(Math.random() * 6)
        }
    },
    getInitialState() {
        return {
            bgIMG: 'url(/images/' + this.props.img[parseInt(this.props.rand)] + '.jpg) !important'
        }
    },
    render() {
        return (
            <div className={(this.props.location == "/") ? "ui inverted vertical masthead center aligned segment" : "ui inverted vertical center aligned segment"} style={{backgroundImage: this.state.bgIMG, backgroundSize: 'cover !important'}}>
                <div className="ui fixed stackable inverted menu">
                    <div className="ui container">
                      <IndexLink className="item" to="/">
                          <img className="logo" src="images/logo7.png" /> robdlaws.com
                      </IndexLink>
                      <Dropdown item text='Portfolio'>
                        <Dropdown.Menu>
                          <Dropdown.Header>Development</Dropdown.Header>
                          <Dropdown.Item>
                            <Link className="text" to="/development"><Icon name="code" /> Web Development</Link>
                          </Dropdown.Item>
                          <Dropdown.Divider />
                          <Dropdown.Header>Design</Dropdown.Header>
                          <Dropdown.Item>
                            <Link className="text" to="/design"><Icon name="paint brush" /> Adobe - Designs</Link>
                          </Dropdown.Item>
                          <Dropdown.Divider />
                          <Dropdown.Header>Data</Dropdown.Header>
                          <Dropdown.Item>
                            <Link className="text" to="/data-visualization"><Icon name="area chart" /> Data Visualization</Link>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      <Dropdown item text='Web Tech'>
                        <Dropdown.Menu>
                          <Dropdown.Header>Community & Tools</Dropdown.Header>
                          <Dropdown.Item>
                            <Link className="text" to="/web-tech"><Icon name="cubes" /> Web Tech</Link>
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <Link className="text" to="/ides"><Icon name="laptop" /> IDEs</Link>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      <Dropdown item text='Photography'>
                        <Dropdown.Menu>
                          <Dropdown.Header>Shoot & Develop</Dropdown.Header>
                          <Dropdown.Item>
                            <Link className="text" to="/travel-photos"><Icon name="plane" /> Travel Photos</Link>
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <Link className="text" to="/fun-photos"><Icon name="photo" /> Fun Photos</Link>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      <Dropdown item text='About Me'>
                        <Dropdown.Menu>
                          <Dropdown.Header>Professional Me</Dropdown.Header>
                          <Dropdown.Item>
                            <Link className="text" to="/about"><Icon name="user" /> About Me</Link>
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <Link className="text" to="/resume"><Icon name="file text outline" /> Resume</Link>
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <Link className="text" to="/social-networking"><Icon name="computer" /> Social Networking</Link>
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <Link className="text" to="/blog"><Icon name="comment" /> Blog</Link>
                          </Dropdown.Item>
                          <Dropdown.Divider />
                          <Dropdown.Header>Relaxtion Me</Dropdown.Header>
                          <Dropdown.Item>
                            <Link className="text" to="/four-footed-friends"><Icon name="paw" /> Four-Footed Friends</Link>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                </div>
                {(this.props.location == "/") ? <div id="homeIdentity" className="ui text container"><h1 className="ui inverted header">Robert Laws</h1><h2><em>Covering the Personal and Professional</em></h2></div> : null}
            </div>
        )
    }
});

module.exports = WebMenu;
