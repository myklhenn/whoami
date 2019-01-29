import React from 'react';
import {
  Container,
  Grid,
  GridColumn,
  GridRow,
  Header,
  Image
} from 'semantic-ui-react';
import Images from '../../img/*.jpg';
import Objective from '../components/Objective';
import Title from '../components/Title';
import resumeData from '../data/resumeData';
import Education from './Education';
import Experience from './Experience';
import Links from './Links';
import Projects from './Projects';

const Layout = () => (
  <Container className="page-container">
    <Grid stackable columns={2}>
      <GridRow divided>
        <GridColumn width={11}>
          <Title name={resumeData.name} />
          <Objective objective={resumeData.objective} />
        </GridColumn>
        <GridColumn width={5}>
          <Image rounded src={Images['profile-img']} size="tiny" />
          <Links linkList={resumeData.links} />
        </GridColumn>
      </GridRow>
    </Grid>

    <Header as="h2" icon="briefcase" content="Experience" />
    <Experience experienceList={resumeData.experience_list} images={Images} />

    <Header as="h2" icon="code" content="Projects" />
    <Projects projects={resumeData.project_list} images={Images} />

    <Header as="h2" icon="graduation cap" content="Education" />
    <Education educationList={resumeData.education_list} images={Images} />
  </Container>
);

export default Layout;
