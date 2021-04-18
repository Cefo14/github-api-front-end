import React from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';

import CardRoute from '../app/components/CardRoute';

export const Main = () => {
  const title = text('title', 'Title');
  const imageURL = text('imageURL', 'https://dummyimage.com/250x250/000/fff');
  const routePath = text('routePath', '/');

  return (
    <CardRoute
      title={title}
      imageURL={imageURL}
      routePath={routePath}
    />
  );
};

export default {
  title: 'CardRoute',
  component: Main,
  decorators: [withKnobs],
};
