import React from 'react';
import { Header } from 'semantic-ui-react';

const Title = ({ name }) => (
  <Header as="h1" size="huge">
    <span className="title">
      /home/<span className="name">{name.first}</span>_
      <span className="name">{name.last}</span>
    </span>
  </Header>
);

export default Title;
