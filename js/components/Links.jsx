import React from 'react';
import { List, ListContent, ListIcon, ListItem } from 'semantic-ui-react';

const Links = ({ linkList }) => {
  var listItems = linkList.map((link, i) => (
    <ListItem as="a" href={link.url} key={`link${i}`}>
      <ListContent>
        <ListIcon name={link.icon_name} size="large" /> {link.text}
      </ListContent>
    </ListItem>
  ));
  return <List relaxed size="large" content={listItems} />;
};

export default Links;
