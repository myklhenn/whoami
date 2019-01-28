import React from 'react';
import {
  Container,
  Embed,
  Grid,
  Header,
  Icon,
  Image,
  Item,
  Label,
  List,
  Modal
} from 'semantic-ui-react';
import disLogo from '../../img/dis-logo.jpg';
import lapseAnalyzerLogo from '../../img/la-screenshot.jpg';
import nfpLogo from '../../img/nfp-logo.jpg';
import profileImg from '../../img/profile-img.jpg';
import roomDisplayLogo from '../../img/rd-logo.jpg';
import wwuLogo from '../../img/wwu-logo.jpg';

export default class Layout extends React.Component {
  render() {
    return (
      <Container style={{ marginTop: '3rem', marginBottom: '3rem' }}>
        <Grid stackable columns={2}>
          <Grid.Row divided>
            <Grid.Column width={11}>
              <Header as="h1" size="huge">
                <span className="title">
                  /home/<span className="name">Michael</span>_
                  <span className="name">Henning</span>
                </span>
              </Header>
              <Header as="h3">
                Full stack software engineer with specialty in web development
                looking to join an organization where quick learning, strong
                attention to detail, and keen desire to improve development
                practices will be useful in the delivery of products that meet
                user needs.
              </Header>
            </Grid.Column>
            <Grid.Column width={5}>
              <Image rounded src={profileImg} size="tiny" />
              <List relaxed size="large">
                <List.Item as="a" href="https://linkedin.com/in/myklhenn">
                  <List.Content>
                    <List.Icon name="linkedin" size="large" /> /in/myklhenn
                  </List.Content>
                </List.Item>
                <List.Item as="a" href="https://github.com/myklhenn">
                  <List.Content>
                    <List.Icon name="github" size="large" /> myklhenn
                  </List.Content>
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Header as="h2">
          <Icon name="briefcase" />
          Experience
        </Header>

        <Item.Group relaxed>
          <Item>
            <Item.Image size="small" src={disLogo} />
            <Item.Content>
              <Item.Header>Full Stack Software Engineer</Item.Header>
              <Item.Meta>
                Dealer Information Systems (DIS) Corporation
              </Item.Meta>
              <Item.Extra>
                <Label>
                  <Icon name="calendar" />
                  January 2018 - September 2018
                </Label>
                <Label>
                  <Icon name="map marker" />
                  Bellingham, WA
                </Label>
              </Item.Extra>
              <Item.Description>
                <List relaxed>
                  <List.Item>
                    Developed and deployed new components of the web interface
                    of our business software
                    <List>
                      <List.Item>
                        <List.Icon name="triangle right" />
                        AngularJS front end, Java back end (Spring Framework),
                        SQL database
                      </List.Item>
                    </List>
                  </List.Item>
                  <List.Item>
                    Used webhooks to integrate an email analytics service with
                    existing email distribution and bookkeeping systems
                  </List.Item>
                  <List.Item>
                    Implemented an event-triggered webhook system for contacting
                    third-party APIs when our database is updated
                  </List.Item>
                  <List.Item>
                    Built 56 Java unit tests for the integrations mentioned
                    above
                  </List.Item>
                  <List.Item>
                    Created a file watching and copying script for team to speed
                    up testing
                  </List.Item>
                  <List.Item>
                    Onboarded five new teammates and mentored them on key
                    components of their new roles
                  </List.Item>
                </List>
              </Item.Description>
            </Item.Content>
          </Item>

          <Item>
            <Item.Image size="small" src={wwuLogo} />
            <Item.Content>
              <Item.Header>Teaching Assistant</Item.Header>
              <Item.Meta>
                Western Washington University MIS Department
              </Item.Meta>
              <Item.Extra>
                <Label>
                  <Icon name="calendar" />
                  September 2017 - December 2017
                </Label>
                <Label>
                  <Icon name="map marker" />
                  Bellingham, WA
                </Label>
              </Item.Extra>
              <Item.Description>
                <List relaxed>
                  <List.Item>
                    Course title: "Fundamentals of Website Development and
                    Management"
                  </List.Item>
                  <List.Item>
                    An introduction to HTML/CSS, server-side PHP programming,
                    and SQL queries
                  </List.Item>
                  <List.Item>
                    Led open computer lab sessions and provided personal
                    mentorship
                  </List.Item>
                </List>
              </Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>

        <Header as="h2">
          <Icon name="code" />
          Projects
        </Header>

        <Item.Group relaxed>
          <Item>
            <Item.Image size="small" src={roomDisplayLogo} />
            <Item.Content>
              <Item.Header>RoomDisplay</Item.Header>
              <Item.Extra>
                <Label>
                  <Icon name="calendar" />
                  March 2017 - March 2018
                </Label>
              </Item.Extra>
              <Item.Description>
                <List relaxed>
                  <List.Item>
                    Web-based software for scheduling use of university
                    conference rooms and faculty office spaces
                    <List>
                      <List.Item>
                        <List.Icon name="triangle right" />
                        TypeScript-based, with a React front end and a Node.js
                        back end
                      </List.Item>
                    </List>
                  </List.Item>
                  <List.Item>
                    Assembled a device that ran the software mentioned above
                    <List>
                      <List.Item>
                        <List.Icon name="triangle right" />A Raspberry Pi
                        connected to a touch screen running a full-screen web
                        browser
                      </List.Item>
                    </List>
                  </List.Item>
                </List>
              </Item.Description>
            </Item.Content>
          </Item>

          <Item>
            <Item.Image size="small" src={nfpLogo} />
            <Item.Content>
              <Item.Header>Near Field Playlist</Item.Header>
              <Item.Extra>
                <Label>
                  <Icon name="calendar" />
                  October 2017 – December 2017
                </Label>
                <Modal
                  size="large"
                  trigger={
                    <Label as="a" color="red">
                      <Icon name="youtube" />
                      Watch Video
                    </Label>
                  }>
                  <Embed id="p-5bATu72us" source="youtube" active hd />
                </Modal>
              </Item.Extra>
              <Item.Description>
                <List relaxed>
                  <List.Item>
                    Android application for inter-device music playlist
                    collaboration
                  </List.Item>
                  <List.Item>
                    Music/playlists managed and retrieved via Spotify's Web API
                  </List.Item>
                  <List.Item>
                    Song identifiers exchanged between devices via Near Field
                    Communications (NFC) radios
                  </List.Item>
                  <List.Item>
                    "Host" device plays music and waits for "guest" devices to
                    provide song requests
                  </List.Item>
                </List>
              </Item.Description>
            </Item.Content>
          </Item>

          <Item>
            <Item.Image size="small" src={lapseAnalyzerLogo} />
            <Item.Content>
              <Item.Header>LapseAnalyzer</Item.Header>
              <Item.Extra>
                <Label>
                  <Icon name="calendar" />
                  July 2017 – March 2018
                </Label>
                <Modal
                  size="large"
                  trigger={
                    <Label as="a" color="red">
                      <Icon name="youtube" />
                      Watch Video
                    </Label>
                  }>
                  <Embed id="3rE6XZAVCKY" source="youtube" active hd />
                </Modal>
              </Item.Extra>
              <Item.Description>
                <List relaxed>
                  <List.Item>
                    Web-based visualization generator and analytics tool for
                    smoking cessation studies
                  </List.Item>
                  <List.Item>
                    Developed a UI for selecting graph parameters and created an
                    event-aligned “stream graph” visualization
                  </List.Item>
                  <List.Item>
                    Accepted into Grace Hopper Conference 2018 Student Research
                    Competition
                  </List.Item>
                </List>
              </Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>

        <Header as="h2">
          <Icon name="graduation cap" />
          Education
        </Header>

        <Item.Group relaxed>
          <Item>
            <Item.Image size="tiny" src={wwuLogo} />
            <Item.Content verticalAlign="middle">
              <Item.Header>Western Washington University</Item.Header>
              <Item.Description>
                Computer Science, BS <br />
                Web Programmer Certificate, Internet Studies Center
              </Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Container>
    );
  }
}
