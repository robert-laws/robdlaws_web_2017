var React = require('react');
var { Link, IndexLink } = require('react-router');
var { Icon } = require('semantic-ui-react');

var Nav = React.createClass({
    render() {
        return (
            <div className={(this.props.location == "/") ? "ui inverted vertical masthead center aligned segment" : "ui inverted vertical center aligned segment"}>
                <div className="ui fixed stackable inverted menu">
                    <div className="ui container">
                        <IndexLink className="item" to="/">
                            <img className="logo" src="images/logo7.png" /> robdlaws.com
                        </IndexLink>
                        <div className="ui simple dropdown item">
                            Portfolio
                            <i className="dropdown icon"></i>
                            <div className="menu">
                                <div className="header">Web Development</div>
                                <Link className="item" to="/front-end-development"><Icon name="code" /> Front-End Development</Link>
                                <Link className="item" to="/back-end-development"><Icon name="database" /> Back-End Development</Link>
                                <div className="divider"></div>
                                <div className="header">Design</div>
                                <Link className="item" to="/"><Icon name="paint brush" /> Adobe Design</Link>
                            </div>
                        </div>
                        <div className="ui simple dropdown item">
                            Web Tech
                            <i className="dropdown icon"></i>
                            <div className="menu">
                                <Link className="item" to="/"><Icon name="cube" /> Podcasts</Link>
                                <Link className="item" to="/"><Icon name="tv" /> Websites</Link>
                                <Link className="item" to="/"><Icon name="user" /> Learning</Link>
                            </div>
                        </div>
                        <div className="ui simple dropdown item">
                            Photography
                            <i className="dropdown icon"></i>
                            <div className="menu">
                                <Link className="item" to="/"><Icon name="plane" /> Travel Photos</Link>
                                <Link className="item" to="/"><Icon name="photo" /> Fun Photos</Link>
                            </div>
                        </div>
                        <div className="ui simple dropdown item">About Me
                            <i className="dropdown icon"></i>
                            <div className="menu">
                                <Link className="item" to="/about"><Icon name="user" /> About Me</Link>
                                <Link className="item" to="/"><Icon name="file text outline" /> Resume</Link>
                                <Link className="item" to="/"><Icon name="computer" /> Social Networking</Link>
                                <div className="divider"></div>
                                <div className="header">Relaxation</div>
                                <Link className="item" to="/"><Icon name="paw" /> Four-footed Friends</Link>
                            </div>
                        </div>
                    </div>
                </div>
                {(this.props.location == "/") ? <div id="homeIdentity" className="ui text container"><h1 className="ui inverted header">Robert Laws</h1><h2><em>Covering the Personal and Professional</em></h2></div> : null}              
            </div>
        )
    }
});

module.exports = Nav;