// presentational

var React = require('react');
var { Container, Grid, Segment, Header, Label, Divider, Image, Icon, List, Message } = require('semantic-ui-react');

var About = (props) => {
  return (
    <Container id="topDiv" text>
      <Header as="h1">About Me</Header>
      <Divider />
      <p>Since 1999, I've been developing websites - primarily for educational institutions, like libraries. Of course this means that I began learning and putting into practice web development skills from the era of Netscape Navigator and Javascript as a toy programming language. A lot has changed since that time. Similar to many aspiring web developers, I've taken a circuitous path to becoming a web developer. When entered university in 1994, I had experience with the Macintosh Class II from high school, but little else. I was introduced to the Pine email client and the Mosaic web browser upon beginning my university career at George Mason in 1994. It was at this time that I took a detour to pursue the study of history, which ultimately resulted in a BA and MA degree. I was fortunate to work as a graduate assistant in a forward-thinking library department at George Mason where I developed basic informational web pages. I also was fortunate to take a course in graduate school taught by professor Roy Rosenzweig who introduced me to the concept of Digital History and the power of technology and information in his course <em>Clio Wired</em>.</p>
      <Segment compact floated='right'>
        <Label attached='bottom' color='brown'>Robert D. Laws</Label>
        <Image src='/images/rdl_home.jpg' size='medium' />
      </Segment>
      <p>Having been exposed to the world-changing technologies that were still in their early stages in 1999, I grew more interested in web technologies and their growing impact. I also began learning more about early UI/UX concepts including the advent of Flash as an multimedia delivery system. After graduating from SUNY at Buffalo with a degree in Library and Information Science, I was able to further advance my skills in web development and was introduced to the .NET Framework and Object-Oriented Programming by creating a data-driven web application for the library.</p>
      <p>Moving on from here, I arrived at Georgetown University in Washington DC and immediately became involved in advising and developing data structures for the library archives as well as enhancing the library catalog DOM with Javascript. It was during this time I felt like I had true command Javascript to parse and manipulate the UI through iteration and DOM parsing.</p>
      <p>An opportunity came up in the Fall of 2007 for me to move to Qatar and work for Georgetown University's campus overseas. Moving to Qatar, I got to experience life as an expatriot and acted as a department of one for the online presence of the Qatar campus library. I was able to lead multiple projects to redesign the library website, always looking to incorporate new technologies. Some examples of the technologies I explored and implemented are Jquery, JSON, CSS Frameworks, Drupal, and MVC architecture using AngularJS.</p>
      <Segment compact floated='left'>
        <Label attached='bottom' color='brown'>ReactJS</Label>
        <Image src='/images/reactjs.png' size='small' />
      </Segment>
      <p>I'm excited for the future in web development. Technology advancements press forward and will impact the world of web development for the foreseeable future. Data network speeds continue to increase, allowing for fully streamable media content without the need to download presistent copies. Highly reactive websites improve the user experience and give web developers access to tools that can unleash their creativity and ambitions.</p>
      <p>That brings me to the present moment. I continue to explore the latest technologies and have lead classes or workshops on modern web development processes using task and package managers. Currently, I'm working with the latest technologies - Webpack, React, AngularJS 2, and ASP.NET Core MVC.</p>
      <Segment inverted secondary color="teal" size="big">
        <Icon name="privacy" size="big" /> Embrace technology to remain relevant in the 21st Century
      </Segment>
      <p>Although I've worked in libraries for most of my career, my future path is with full-on web development. As the world changes, I believe it will be essential to have high-level technical skills to keep up. For institutions and professions that aren't willing to embrace the changes, they will find it harder to make themselves relevant in the 21st century.</p>
      <Divider />
      <Header sub>Interests Outside of Web Development</Header>
      <p>Most of my waking hours are spent at a computer screen working with web technologies. However, during the hours when I'm not staring at a screen I'm either enjoying a run outside, traveling, taking photos, or spending time with my two dogs - Snowflake and Flurry.</p>
      <p>I've been fortunate to have traveled widely throughout Europe. I particularly enjoyed visiting Germany, which has all the charms of the Old World, yet is a very modern and technologically advanced country. Many of my best photographs have been taken during my time visiting Germany.</p>
    </Container>
  )
}

module.exports = About;
