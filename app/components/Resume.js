// presentational

var React = require('react');
var { Container, Header, Segment, List, Grid } = require('semantic-ui-react');

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
                          <p className="expTopicHeading topTopic"><u><em>Digital Literacy</em></u></p>
                          <List className="expTopicList" bulleted>
                            <List.Item>Taught as a adjunct faculty at University College of London in Qatar for classes on website development</List.Item>
                            <List.Item>Embedded librarian in a political science course over 2 semesters - instructed students on using ArcGIS
to create data-enhanced map visualizations</List.Item>
                            <List.Item>Instructed students how to use Canva, Adobe Illustrator and Acrobat to create digital posters</List.Item>
                            <List.Item>Instructed students how to use of OMEKA in several courses</List.Item>
                          </List>
                          <p className="expTopicHeading"><u><em>Education Technology</em></u></p>
                          <List className="expTopicList" bulleted>
                            <List.Item>Taught as a adjunct faculty at University College of London in Qatar for classes on website development</List.Item>
                            <List.Item>Embedded librarian in a political science course over 2 semesters - instructed students on using ArcGIS
to create data-enhanced map visualizations</List.Item>
                            <List.Item>Instructed students how to use Canva, Adobe Illustrator and Acrobat to create digital posters</List.Item>
                            <List.Item>Instructed students how to use of OMEKA in several courses</List.Item>
                          </List>
                          <p className="expTopicHeading"><u><em>Multimedia</em></u></p>
                          <List className="expTopicList" bulleted>
                            <List.Item>Directed library multimedia usage in the library including:</List.Item>
                              <List.List as="ul" className="subMenu">
                                <List.Item as="li">Instructed students on audio-visual projects using GarageBand, iMovie and Final Cut Pro</List.Item>
                                <List.Item as="li">Worked with students and staff to manipulate images with Adobe Photoshop and Fireworks</List.Item>
                                <List.Item as="li">Assisted students, faculty and staff with video production requests</List.Item>
                                <List.Item as="li">Advised library staff on emerging technologies such as e-book readers and screencasting</List.Item>
                              </List.List>
                            <List.Item>Developed digital learning objects for ArcGIS and database access</List.Item>
                            <List.Item>Designed and printed signage for the library with Adobe Illustrator and InDesign</List.Item>
                          </List>
                          <p className="expTopicHeading"><u><em>Web Development</em></u></p>
                          <List className="expTopicList" bulleted>
                            <List.Item>Led development projects over several iterations for the library website using Drupal CMS</List.Item>
                            <List.Item>Enhanced the library website with jQuery, JSON, PHP, and responsive design techniques</List.Item>
                            <List.Item>Taught community classes on web development using WordPress CMS</List.Item>
                            <List.Item>Developed the Islamic Bioethics Project website - used AngularJS for backend development</List.Item>
                            <List.Item>Created an responsive library email-flyer template with handlebars.js</List.Item>
                            <List.Item>Tracked and managed source code for the library website using Subversion and Git</List.Item>
                            <List.Item>Led projects developing LibGuides 2.0, particularly leveraging the Bootstrap front-end framework</List.Item>
                          </List>
                          <p className="expTopicHeading"><u><em>Library Technology and Systems</em></u></p>
                          <List className="expTopicList" bulleted>
                            <List.Item>Served as project manager and organized a team to implement RFID technology throughout the library</List.Item>
                            <List.Item>Analyzed and updated the library access services systems rules in the Sierra LMS</List.Item>
                            <List.Item>Worked with library staff as technical lead for projects in the Sierra LMS including creating lists, RSS</List.Item>
                            feeds, and configuring spine labels
                            <List.Item>Liaised with the university information technology department in a variety of day-to-day and long-term projects</List.Item>
                          </List>
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
                    <Segment color="blue" basic>
                      <Header as="h2" dividing>
                        Education
                      </Header>
                      <p className="expSubHeading"><strong>MS in Information & Library Science ⋅ 2004</strong><br/>State University of New York at Buffalo ⋅ Buffalo, NY</p>
                      <p className="expSubHeading"><strong>MA in History ⋅ 2001</strong><br/>George Mason University ⋅ Fairfax, VA</p>
                      <p className="expSubHeading"><strong>BA in History ⋅ 1998</strong><br/>George Mason University ⋅ Fairfax, VA</p>
                    </Segment>
                  </Grid.Column>
                </Grid>
            </Container>
        )
    }
});

module.exports = Resume;
