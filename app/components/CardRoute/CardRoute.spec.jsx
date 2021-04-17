import React from 'react';
import faker from 'faker';

import { render, screen } from '@testing-library/react';
import CardRoute from '.';

describe('CardRoute Component', () => {
  describe('when no have props', () => {
    it('should render the component', () => {
      render(<CardRoute />);
      const element = screen.getByTestId('CardRoute');
      expect(element).toBeInTheDocument();
    });
  });

  describe('when have props', () => {
    it('should render the component with props', () => {
      const title = faker.random.word();
      const imageURL = faker.internet.avatar();
      const routePath = faker.internet.url();

      render(<CardRoute
        title={title}
        imageURL={imageURL}
        routePath={routePath}
      />);

      const element = screen.getByTestId('CardRoute');
      const avatarElement = element.querySelector('img');

      expect(element).toBeInTheDocument();
      expect(element).toHaveTextContent(title);
      expect(avatarElement).toBeInTheDocument();
      expect(avatarElement.src).toBe(imageURL);
    });
  });
});
