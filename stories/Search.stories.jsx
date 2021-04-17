import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, boolean, withKnobs } from '@storybook/addon-knobs';

import Search from '../app/components/Search';

export const Main = () => {
  const title = text('title', 'Titulo');
  const value = text('value', 'Valor');
  const onBack = action('onBack');
  const onChange = action('onChange');
  const disabled = boolean('disabled', false);
  const isLoading = boolean('isLoading', false);

  return (
    <Search
      title={title}
      value={value}
      onBack={onBack}
      onChange={onChange}
      disabled={disabled}
      isLoading={isLoading}
    />
  );
};

export default {
  title: 'Search',
  component: Main,
  decorators: [withKnobs],
};
