import React from 'react';
import { action } from '@storybook/addon-actions';
import { number, boolean, withKnobs } from '@storybook/addon-knobs';

import Paginator from '../app/components/Paginator';

export const Main = () => {
  const currentPage = number('currentPage', 2);
  const itemsPerPage = number('itemsPerPage', 10);
  const totalItems = number('totalItems', 100);
  const onPrevPage = action('onPrevPage');
  const onNextPage = action('onNextPage');
  const disabled = boolean('disabled', false);

  return (
    <Paginator
      currentPage={currentPage}
      itemsPerPage={itemsPerPage}
      totalItems={totalItems}
      onPrevPage={onPrevPage}
      onNextPage={onNextPage}
      disabled={disabled}
    />
  );
};

export default {
  title: 'Paginator',
  component: Main,
  decorators: [withKnobs],
};
