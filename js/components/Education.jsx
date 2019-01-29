import React from 'react';
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemHeader,
  ItemImage
} from 'semantic-ui-react';

const Education = ({ educationList, images }) => {
  var items = educationList.map((education, i) => {
    var details = education.details.map((detail, j) => (
      <div key={`education${i}detail${j}`}>{detail}</div>
    ));
    return (
      <Item key={`education${i}`}>
        <ItemImage size="tiny" src={images[education.image_name]} />
        <ItemContent verticalAlign="middle">
          <ItemHeader content={education.school} />
          <ItemDescription content={details} />
        </ItemContent>
      </Item>
    );
  });
  return <ItemGroup relaxed content={items} />;
};

export default Education;
