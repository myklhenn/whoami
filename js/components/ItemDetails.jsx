import React from 'react';
import { List, ListItem } from 'semantic-ui-react';

const ItemDetails = ({ details, keyPrefix }) => {
  var listContent = details.map((detail, i) => {
    if (typeof detail === 'object') {
      var subListContent = detail.sub_details.map((sub_detail, j) => (
        <ListItem
          icon="triangle right"
          key={`${keyPrefix}detail${i}subdetail${j}`}
          content={sub_detail}
        />
      ));
      return (
        <ListItem key={`${keyPrefix}detail${i}`}>
          {detail.data}
          <List content={subListContent} />
        </ListItem>
      );
    } else {
      return <ListItem key={`${keyPrefix}detail${i}`} content={detail} />;
    }
  });
  return <List relaxed content={listContent} />;
};

export default ItemDetails;
