var React = require('react');
var { Link, IndexLink } = require('react-router');
var { Icon } = require('semantic-ui-react');

var WebMenu = React.createClass({
    getDefaultProps() {
        return {
            img: ['IMG_0540', 'IMG_2359', 'IMG_4845', 'IMG_4896', 'IMG_4925', 'IMG_5845'],
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
                        <div className="ui simple dropdown item">
                            Portfolio
                            <i className="dropdown icon"></i>
                            <div className="menu">
                                <div className="header">Development</div>
                                <Link className="item" to="/development"><Icon name="code" /> Web Development</Link>
                                <div className="divider"></div>
                                <div className="header">Design</div>
                                <Link className="item" to="/design"><Icon name="paint brush" /> Adobe - Designs</Link>
                                <div className="divider"></div>
                                <div className="header">Data</div>
                                <Link className="item" to="/data-visualization"><Icon name="area chart" /> Data Visualization</Link>
                            </div>
                        </div>
                        <div className="ui simple dropdown item">
                            Web Tech
                            <i className="dropdown icon"></i>
                            <div className="menu">
                                <Link className="item" to="/web-tech"><Icon name="cubes" /> Web Tech</Link>
                                <Link className="item" to="/ides"><Icon name="laptop" /> IDEs</Link>
                            </div>
                        </div>
                        <div className="ui simple dropdown item">
                            Photography
                            <i className="dropdown icon"></i>
                            <div className="menu">
                                <Link className="item" to="/travel-photos"><Icon name="plane" /> Travel Photos</Link>
                                <Link className="item" to="/fun-photos"><Icon name="photo" /> Fun Photos</Link>
                            </div>
                        </div>
                        <div className="ui simple dropdown item">About Me
                            <i className="dropdown icon"></i>
                            <div className="menu">
                                <div className="header">Professional</div>
                                <Link className="item" to="/about"><Icon name="user" /> About Me</Link>
                                <Link className="item" to="/resume"><Icon name="file text outline" /> Resume</Link>
                                <Link className="item" to="/social-networking"><Icon name="computer" /> Social Networking</Link>
                                <Link className="item" to="/blog"><Icon name="comment" /> Blog</Link>
                                <div className="divider"></div>
                                <div className="header">Relaxation</div>
                                <Link className="item" to="/four-footed-friends"><Icon name="paw" /> Four-Footed Friends</Link>
                            </div>
                        </div>
                    </div>
                </div>
                {(this.props.location == "/") ? <div id="homeIdentity" className="ui text container"><h1 className="ui inverted header">Robert Laws</h1><h2><em>Covering the Personal and Professional</em></h2></div> : null}
            </div>
        )
    }
});

module.exports = WebMenu;
