// presentational

var React = require('react');
var { Container, Header, Segment, List, Grid } = require('semantic-ui-react');
import { DigitalLiteracyResume, WebDevelopmentResume, LibraryTechnologySystemsResume, MultimediaResume, EducationalTechnologyResume } from 'ResumeSpecializations';

var Resume = React.createClass({
    render() {
        return (
            <Container id="topDiv" className="contentRegular">
                <Header as="h1">Resume</Header>
                <Segment color="blue" basic>
                  <Grid stackable columns={2}>
                    <Grid.Column>
                      <Header as="h1" color="blue">
                        Robert<br/>Laws
                      </Header>
                    </Grid.Column>
                    <Grid.Column>
                      <List className="contactMeList">
                        <List.Item>
                          <List.Icon name="phone"></List.Icon>
                          <List.Content>+974 4457-8315</List.Content>
                        </List.Item>
                        <List.Item>
                          <List.Icon name="mail"></List.Icon>
                          <List.Content><a href="mailto:rdl27@georgetown.edu">rdl27@georgetown.edu</a></List.Content>
                        </List.Item>
                        <List.Item>
                          <List.Icon name="world"></List.Icon>
                          <List.Content><a href="http://www.robdlaws.com">robdlaws.com</a></List.Content>
                        </List.Item>
                        <List.Item>
                          <List.Icon name="marker"></List.Icon>
                          <List.Content><a href="https://www.google.com/maps/place/Doha,+Qatar/@25.283943,51.3719109">Doha, Qatar</a></List.Content>
                        </List.Item>
                      </List>
                    </Grid.Column>
                  </Grid>
                </Segment>
                <Grid stackable divided>
                  <Grid.Column width={11}>
                    <Segment color="blue" basic>
                      <Header as="h2" dividing>
                        Professional Experience
                      </Header>
                      <Grid>
                        <Grid.Column width={3}>
                          <p><em>2008 - present</em></p>
                        </Grid.Column>
                        <Grid.Column width={13}>
                          <p className="expSubHeading"><strong>Digital and Media Services Librarian</strong><br/>Georgetown University, School of Foreign Service in Qatar ⋅ Doha, Qatar</p>
                          <WebDevelopmentResume />
                          <DigitalLiteracyResume />
                          <LibraryTechnologySystemsResume />
                          <MultimediaResume />
                          <EducationalTechnologyResume />
                        </Grid.Column>
                      </Grid>
                      <Grid>
                        <Grid.Column width={3}>
                          <p><em>2007 - 2008</em></p>
                        </Grid.Column>
                        <Grid.Column width={13}>
                          <p className="expSubHeading"><strong>Digital Services Librarian, Lauinger Library</strong><br/>Georgetown University ⋅ Washington D.C.</p>
                          <List className="expTopicList" bulleted>
                            <List.Item>Enhanced the user interface and functionality of the library’s OPAC - Innovative Interfaces</List.Item>
                            <List.Item>Collaborated with the cataloging & special collections departments to investigate the use of EAD
standards for collections</List.Item>
                          </List>
                        </Grid.Column>
                      </Grid>
                      <Grid>
                        <Grid.Column width={3}>
                          <p><em>2004 - 2007</em></p>
                        </Grid.Column>
                        <Grid.Column width={13}>
                          <p className="expSubHeading"><strong>Technology & Systems Librarian, Main Library</strong><br/>Fauquier County Public Libraries ⋅ Warrenton, VA</p>
                          <List className="expTopicList" bulleted>
                            <List.Item>Maintained and updated the library’s OPAC - Innovative Interfaces</List.Item>
                            <List.Item>Researched and implemented emerging technologies including e-book readers & digitization</List.Item>
                            <List.Item>Liaised with the county information technology department</List.Item>
                          </List>
                        </Grid.Column>
                      </Grid>
                    </Segment>
                    <Segment color="blue" basic>
                      <Header as="h2" dividing>
                        Professional Engagement
                      </Header>
                      <Grid>
                        <Grid.Column width={3}></Grid.Column>
                        <Grid.Column width={13}>
                          <p className="expSubHeading"><strong>Adjunct Faculty</strong><br/>University College of London in Qatar ⋅ Doha, Qatar</p>
                          <List className="expTopicList" bulleted>
                            <List.Item>Visiting Professor 2014/2015 - UCLQG427: Principles of Computing and Information Technology</List.Item>
                          </List>
                        </Grid.Column>
                      </Grid>
                      <Grid>
                        <Grid.Column width={3}></Grid.Column>
                        <Grid.Column width={13}>
                          <p className="expSubHeading"><strong>Instructor, School of Continuing Education</strong><br/>Georgetown University, School of Foreign Service in Qatar ⋅ Doha, Qatar</p>
                          <List className="expTopicList" bulleted>
                            <List.Item>Fall 2015 - Web Mapping and GIS</List.Item>
                            <List.Item>Spring 2016 - Digital Magazine and Book Design</List.Item>
                            <List.Item>Spring 2016 - WordPress: Your Website Made Easy</List.Item>
                            <List.Item>Fall 2016 - WordPress: Your Website Made Easy</List.Item>
                            <List.Item>Spring 2017 - Data Visualization: Transform your Data into compelling Visualizations</List.Item>
                            <List.Item>Spring 2017 - Your Website Accelerated: Intermediate WordPress for personal and professional websites</List.Item>
                          </List>
                        </Grid.Column>
                      </Grid>
                      <Grid>
                        <Grid.Column width={3}></Grid.Column>
                        <Grid.Column width={13}>
                          <p className="expSubHeading"><strong>Conference Presentations</strong></p>
                          <List className="expTopicList" bulleted>
                            <List.Item>2016 Emerging Technologies in Libraries Symposium ⋅ Doha, Qatar<br/><em>Modern Web Development</em></List.Item>
                            <List.Item>2015 Computers in Libraries ⋅ Washington D.C.<br/><em>Contemporary Library Websites Design and Development</em></List.Item>
                            <List.Item>2014 Information Literacy Network Workshop ⋅ Muscat, Oman<br/><em>Optiminzing Cloud Technologies for Learning</em></List.Item>
                            <List.Item>2013 Special Libraries Association - Arabian Gulf Chapter Conference ⋅ Doha, Qatar<br/><em>Responsive web design in English and Arabic</em></List.Item>
                            <List.Item>2009 Middle East & North Africa Innovative Users Group Conference ⋅ Cairo, Egypt<br/><em>RFID Implementation Project - Challenges and Best Practices</em></List.Item>
                          </List>
                        </Grid.Column>
                      </Grid>
                    </Segment>
                  </Grid.Column>
                  <Grid.Column width={5}>
                    <Segment color="blue" basic>
                      <Header as="h2" dividing>
                        Education
                      </Header>
                      <p className="expSubHeading"><strong>MS in Information & Library Science ⋅ 2004</strong><br/>State University of New York at Buffalo ⋅ Buffalo, NY</p>
                      <p className="expSubHeading"><strong>MA in History ⋅ 2001</strong><br/>George Mason University ⋅ Fairfax, VA</p>
                      <p className="expSubHeading"><strong>BA in History ⋅ 1998</strong><br/>George Mason University ⋅ Fairfax, VA</p>
                    </Segment>
                    <Segment color="blue" basic>
                      <Header as="h2" dividing>
                        Technology Expertise
                      </Header>
                      <p className="expSubHeading"><strong>Web Development</strong></p>
                      <List className="expTopicList" bulleted>
                        <List.Item>HTML</List.Item>
                        <List.Item>CSS (including Sass & Compass)</List.Item>
                        <List.Item>Javascript (JQuery, AngularJS)</List.Item>
                        <List.Item>XML</List.Item>
                      </List>
                      <p className="expSubHeading"><strong>Educational Technology</strong></p>
                      <List className="expTopicList" bulleted>
                        <List.Item>Omeka</List.Item>
                        <List.Item>VoiceThread</List.Item>
                        <List.Item>Lecture Capture with Echo360</List.Item>
                        <List.Item>Zoom - Video Conferencing</List.Item>
                        <List.Item>Clickers for interactive classrooms</List.Item>
                      </List>
                      <p className="expSubHeading"><strong>Content Management Systems</strong></p>
                      <List className="expTopicList" bulleted>
                        <List.Item>WordPress</List.Item>
                        <List.Item>Drupal</List.Item>
                      </List>
                      <p className="expSubHeading"><strong>Digitial Publishing</strong></p>
                      <List className="expTopicList" bulleted>
                        <List.Item>InDesign</List.Item>
                        <List.Item>MS Publisher</List.Item>
                      </List>
                      <p className="expSubHeading"><strong>Image Editing</strong></p>
                      <List className="expTopicList" bulleted>
                        <List.Item>Photoshop</List.Item>
                        <List.Item>Illustrator</List.Item>
                        <List.Item>Fireworks</List.Item>
                      </List>
                      <p className="expSubHeading"><strong>Audio/Visual Editing</strong></p>
                      <List className="expTopicList" bulleted>
                        <List.Item>GarageBand</List.Item>
                        <List.Item>Audacity</List.Item>
                        <List.Item>iMovie</List.Item>
                        <List.Item>Final Cut Pro</List.Item>
                      </List>
                      <p className="expSubHeading"><strong>Data Analysis/Visualization</strong></p>
                      <List className="expTopicList" bulleted>
                        <List.Item>Tableau</List.Item>
                        <List.Item>ArcGIS</List.Item>
                        <List.Item>D3.js</List.Item>
                        <List.Item>Chart.js</List.Item>
                      </List>
                    </Segment>
                  </Grid.Column>
                </Grid>
            </Container>
        )
    }
});

module.exports = Resume;
