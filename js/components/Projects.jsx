import React from 'react';
import {
  Embed,
  Item,
  ItemContent,
  ItemDescription,
  ItemExtra,
  ItemHeader,
  ItemImage,
  Label,
  Modal
} from 'semantic-ui-react';
import ItemDetails from './ItemDetails';

const Projects = ({ projects, images }) => {
  var items = projects.map((project, i) => (
    <Item key={`project${i}`}>
      <ItemImage size="small" src={images[project.image_name]} />
      <ItemContent>
        <ItemHeader content={project.name} />
        <ItemExtra>
          <Label icon="calendar" content={project.time_range} />
          {project.video_id && (
            <Modal
              size="large"
              trigger={
                <Label
                  as="a"
                  color="red"
                  icon={project.video_source}
                  content="Watch Video"
                />
              }
              content={
                <Embed
                  id={project.video_id}
                  source={project.video_source}
                  active
                  hd
                />
              }
            />
          )}
        </ItemExtra>
        <ItemDescription>
          <ItemDetails details={project.details} keyPrefix={`project${i}`} />
        </ItemDescription>
      </ItemContent>
    </Item>
  ));
  return <Item.Group relaxed content={items} />;
};

export default Projects;
