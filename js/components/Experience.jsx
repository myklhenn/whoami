import React from 'react';
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemExtra,
  ItemGroup,
  ItemHeader,
  ItemImage,
  ItemMeta,
  Label
} from 'semantic-ui-react';
import ItemDetails from './ItemDetails';

const Experience = ({ experienceList, images }) => {
  var items = experienceList.map((exp, i) => (
    <Item key={`experience${i}`}>
      <ItemImage size="small" src={images[exp.image_name]} />
      <ItemContent>
        <ItemHeader content={exp.job_title} />
        <ItemMeta content={exp.company} />
        <ItemExtra>
          <Label icon="calendar" content={exp.time_range} />
          <Label icon="map marker" content={exp.location} />
        </ItemExtra>
        <ItemDescription>
          <ItemDetails details={exp.details} keyPrefix={`experience${i}`} />
        </ItemDescription>
      </ItemContent>
    </Item>
  ));
  return <ItemGroup relaxed content={items} />;
};

export default Experience;
