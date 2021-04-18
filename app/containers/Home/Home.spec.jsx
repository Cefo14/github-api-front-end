import React from 'react';
import 'jest-extended';

import { render, screen } from '@testing-library/react';
import Home from '.';

describe('Home Container', () => {
  describe('when is ok', () => {
    it('should render the component', () => {
      render(<Home />);

      const element = screen.getByTestId('Home');
      const cardRoutes = screen.getAllByTestId('CardRoute');

      expect(element).toBeInTheDocument();
      expect(cardRoutes).toBeArray();
      expect(cardRoutes.length).toBeGreaterThanOrEqual(1);

      cardRoutes.forEach((cardRoute) => {
        expect(cardRoute).toBeInTheDocument();
      });
    });
  });
});
