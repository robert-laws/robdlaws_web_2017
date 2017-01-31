import React from 'react'
import { Link } from 'react-router'
import { Container, Header, Segment, Divider, Message, Image, List, Icon } from 'semantic-ui-react'

export const Footer = () => {
    return (
        <Segment vertical inverted className="footer">
            <Container>
                <div className="ui stackable inverted divided equal height stackable grid">
                    <div className="three wide column">
                        <Header as="h4" inverted>About</Header>
                        <List inverted link>
                            <List.Item>
                                <Link className="item" to="/">Sitemap</Link>
                            </List.Item>
                            <List.Item>
                                <Link className="item" to="/">Contact Us</Link>
                            </List.Item>
                            <List.Item>
                                <Link className="item" to="/">Multimedia</Link>
                            </List.Item>
                            <List.Item>
                                <Link className="item" to="/">Affiliations</Link>
                            </List.Item>
                        </List>                        
                    </div>
                    <div className="three wide column">
                        <Header as="h4" inverted>Other Projects</Header>
                        <List inverted link>
                            <List.Item>
                                <Link className="item" to="/">Ardeel.io</Link>                                
                            </List.Item>
                            <List.Item>
                                <Link className="item" to="/">Adobe Portfolio</Link>
                            </List.Item>
                            <List.Item>
                                <Link className="item" to="/">Behance</Link>
                            </List.Item>
                            <List.Item>
                                <Link className="item" to="/">Creative Cloud</Link>
                            </List.Item>
                        </List>                        
                    </div>
                    <div className="seven wide column">
                        <Header as="h4" inverted>robdlaws.com</Header>
                        <p>"Web development is a liberating and empowering activity."</p>
                    </div>
                </div>
            </Container>
        </Segment>
    )
}