# Textual Content

Using [Semantic-UI-React](http://react.semantic-ui.com) to render the UI elements.

Need to import { Container, Grid, Segment, Header, Divider, Image, List, Message } from 'semantic-ui-react'

### Container
```html
<Container text>
  <Header as="h2">Header</Header>
  <p>Content goes here...</p>
</Container>
```
### Divider
```html
<Divider />
```
### Image
```html
<Image src='/assets/images/wireframe/white-image.png' size='medium' shape='rounded' floated='right' bordered />
```
### Header
```html
<Header as="h1">Big Header</Header>
```
### Sub-Header
```html
<Header sub>Sub-header</Header>
```
### List
```html
<List>
  <List.Item>Apples</List.Item>
  <List.Item>Pears</List.Item>
  <List.Item>Oranges</List.Item>
</List>
```
### Segment
```html
<Segment>
  Some content goes here...
</Segment>
```
### Grid
```html
<Grid columns={3}>
  <Grid.Row>
    <Grid.Column>
      <Image src='http://semantic-ui.com/images/wireframe/paragraph.png' />
    </Grid.Column>
    <Grid.Column>
      <Image src='http://semantic-ui.com/images/wireframe/paragraph.png' />
    </Grid.Column>
    <Grid.Column>
      <Image src='http://semantic-ui.com/images/wireframe/paragraph.png' />
    </Grid.Column>
  </Grid.Row>
</Grid>
```
### Message - with Icon
```html
<Message
  icon='inbox'
  header='Have you heard about our mailing list?'
  content='Get the best news in your e-mail every day.'
/>
```
