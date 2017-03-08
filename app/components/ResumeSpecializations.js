var React = require('react');
var { Container, Header, Segment, List, Grid } = require('semantic-ui-react');

var DigitalLiteracyResume = React.createClass({
  render: function() {
    return (
      <div className="ResumeSpecialization">
        <p className="expTopicHeading topTopic"><u><em>Digital Literacy</em></u></p>
        <List className="expTopicList" bulleted>
          <List.Item>Taught students skills to make use of computers to create and optimize digital content including work with Adobe Photoshop and Illustrator</List.Item>
          <List.Item>Worked with students to recognize and analyze digital content in course and research contexts</List.Item>
          <List.Item>Taught students on how to meld analog information within a digital medium including enrichment of print and visual materials with metadata descriptions</List.Item>
        </List>
      </div>
    )
  }
});

var EducationalTechnologyResume = React.createClass({
  render: function() {
    return (
      <div className="ResumeSpecialization">
        <p className="expTopicHeading"><u><em>Education Technology</em></u></p>
        <List className="expTopicList" bulleted>
          <List.Item>Embedded Library over two semesters in course <em>Water Resources in World Politics</em> focused on the use of ArcGIS to analyze data and create visualizations</List.Item>
          <List.Item>Instructed students how to use Canva, Adobe Illustrator and Acrobat to create digital posters</List.Item>
          <List.Item>Instructed students how to use of OMEKA in several courses</List.Item>
        </List>
      </div>
    )
  }
});

var WebDevelopmentResume = React.createClass({
  render: function() {
    return (
      <div className="ResumeSpecialization">
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
      </div>
    )
  }
});

var LibraryTechnologySystemsResume = React.createClass({
  render: function() {
    return (
      <div className="ResumeSpecialization">
        <p className="expTopicHeading"><u><em>Library Technology and Systems</em></u></p>
        <List className="expTopicList" bulleted>
          <List.Item>Served as project manager and organized a team to implement RFID technology throughout the library</List.Item>
          <List.Item>Analyzed and updated the library access services systems rules in the Sierra LMS</List.Item>
          <List.Item>Worked with library staff as technical lead for projects in the Sierra LMS including creating lists, RSS</List.Item>
          feeds, and configuring spine labels
          <List.Item>Liaised with the university information technology department in a variety of day-to-day and long-term projects</List.Item>
        </List>
      </div>
    )
  }
});

var MultimediaResume = React.createClass({
  render: function() {
    return (
      <div className="ResumeSpecialization">
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
      </div>
    )
  }
});

module.exports = {
  DigitalLiteracyResume,
  WebDevelopmentResume,
  LibraryTechnologySystemsResume,
  MultimediaResume,
  EducationalTechnologyResume
}
