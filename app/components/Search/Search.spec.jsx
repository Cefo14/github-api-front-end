import React from 'react';
import faker from 'faker';
import { render, screen, fireEvent } from '@testing-library/react';
import 'jest-extended';

import Search from '.';

describe('Search Component', () => {
  let title = faker.random.word();
  let value = faker.random.word();
  let onBack = jest.fn();
  let onChange = jest.fn();
  let disabled = false;
  let isLoading = false;

  beforeEach(() => {
    title = faker.random.word();
    value = faker.random.word();
    onBack = jest.fn();
    onChange = jest.fn();
    disabled = false;
    isLoading = false;
  });

  describe('when no have props', () => {
    it('should render the component', () => {
      render(<Search />);
      const element = screen.getByTestId('Search');
      expect(element).toBeInTheDocument();
    });
  });

  describe('when have props', () => {
    it('should render the component with props', () => {
      render(<Search
        title={title}
        value={value}
        onBack={onBack}
        onChange={onChange}
        disabled={disabled}
        isLoading={isLoading}
      />);

      const element = screen.getByTestId('Search');

      expect(element).toBeInTheDocument();
      expect(element).toHaveTextContent(title);
    });
  });

  describe('when is disabled', () => {
    it('should render the component with props', () => {
      render(<Search
        title={title}
        value={value}
        onBack={onBack}
        onChange={onChange}
        disabled
        isLoading={isLoading}
      />);

      const onBackButton = screen.getByTestId('Search-GoBack');
      const searchBar = screen.getByTestId('Search-Input');

      expect(onBackButton).toBeInTheDocument();
      expect(onBackButton.disabled).toBeTrue();

      expect(searchBar).toBeInTheDocument();
      expect(searchBar.disabled).toBeTrue();
    });
  });

  describe('when onBack event', () => {
    it('should onback event to have been called', () => {
      render(<Search
        title={title}
        value={value}
        onBack={onBack}
        onChange={onChange}
        disabled={disabled}
        isLoading={isLoading}
      />);

      const onBackElement = screen.getByTestId('Search-GoBack');
      fireEvent.click(onBackElement);

      expect(onBack).toHaveBeenCalledTimes(1);
    });
  });

  describe('when onChange event', () => {
    it('should onChange event to have been called', () => {
      render(<Search
        title={title}
        value={value}
        onBack={onBack}
        onChange={onChange}
        disabled={disabled}
        isLoading={isLoading}
      />);

      const inputElement = screen.getByTestId('Search-Input');
      fireEvent.change(inputElement, { target: { value: '' } });

      expect(onChange).toHaveBeenCalledTimes(1);
    });
  });
});
