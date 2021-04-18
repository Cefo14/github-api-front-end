import React from 'react';
import faker from 'faker';
import { render, screen, fireEvent } from '@testing-library/react';
import 'jest-extended';

import Paginator from '.';

describe('Paginator Component', () => {
  let currentPage;
  let itemsPerPage;
  let totalItems;
  let onPrevPage;
  let onNextPage;
  let disabled;
  let totalPages;

  beforeEach(() => {
    currentPage = 1;
    itemsPerPage = faker.datatype.number({
      min: 1,
      max: 5,
    });
    totalItems = faker.datatype.number({
      min: 10,
      max: 100,
    });
    onPrevPage = jest.fn();
    onNextPage = jest.fn();
    disabled = false;

    totalPages = Math.floor(totalItems / itemsPerPage) || 1;
  });

  describe('when no have props', () => {
    it('should render the component', () => {
      render(<Paginator />);
      const element = screen.getByTestId('Paginator');
      expect(element).toBeInTheDocument();
    });
  });

  describe('when have props', () => {
    it('should render the component with props', () => {
      render(<Paginator
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={totalItems}
        onPrevPage={onPrevPage}
        onNextPage={onNextPage}
        disabled={disabled}
      />);

      const element = screen.getByTestId('Paginator');

      expect(element).toBeInTheDocument();
      expect(element).toHaveTextContent(currentPage);
      expect(element).toHaveTextContent(totalPages);
    });
  });

  describe('when currentPage is 1', () => {
    it('should render the component with NextButton', () => {
      render(<Paginator
        currentPage={1}
        itemsPerPage={itemsPerPage}
        totalItems={totalItems}
        onPrevPage={onPrevPage}
        onNextPage={onNextPage}
        disabled={disabled}
      />);

      const prevButton = screen.queryByTestId('Paginator-PrevButton');
      const nextButton = screen.queryByTestId('Paginator-NextButton');

      expect(prevButton).not.toBeInTheDocument();
      expect(nextButton).toBeInTheDocument();

      fireEvent.click(nextButton);
      expect(onNextPage).toHaveBeenCalledTimes(1);
    });
  });

  describe('when currentPage is equal to totalPages', () => {
    it('should render the component with PrevButton', () => {
      render(<Paginator
        currentPage={totalPages}
        itemsPerPage={itemsPerPage}
        totalItems={totalItems}
        onPrevPage={onPrevPage}
        onNextPage={onNextPage}
        disabled={disabled}
      />);

      const prevButton = screen.queryByTestId('Paginator-PrevButton');
      const nextButton = screen.queryByTestId('Paginator-NextButton');

      expect(prevButton).toBeInTheDocument();
      expect(nextButton).not.toBeInTheDocument();

      fireEvent.click(prevButton);
      expect(onPrevPage).toHaveBeenCalledTimes(1);
    });
  });

  describe('when currentPage is between 1 and totalPages', () => {
    it('should render the component with PrevButton', () => {
      render(<Paginator
        currentPage={2}
        itemsPerPage={itemsPerPage}
        totalItems={totalItems}
        onPrevPage={onPrevPage}
        onNextPage={onNextPage}
        disabled={disabled}
      />);

      const prevButton = screen.queryByTestId('Paginator-PrevButton');
      const nextButton = screen.queryByTestId('Paginator-NextButton');

      expect(prevButton).toBeInTheDocument();
      expect(nextButton).toBeInTheDocument();

      fireEvent.click(prevButton);
      expect(onPrevPage).toHaveBeenCalledTimes(1);

      fireEvent.click(nextButton);
      expect(onNextPage).toHaveBeenCalledTimes(1);
    });
  });

  describe('when is disabled', () => {
    it('should render the component and disabled buttons', () => {
      render(<Paginator
        currentPage={2}
        itemsPerPage={itemsPerPage}
        totalItems={totalItems}
        onPrevPage={onPrevPage}
        onNextPage={onNextPage}
        disabled
      />);

      const prevButton = screen.queryByTestId('Paginator-PrevButton');
      const nextButton = screen.queryByTestId('Paginator-NextButton');

      expect(prevButton).toBeInTheDocument();
      expect(nextButton).toBeInTheDocument();

      expect(prevButton.disabled).toBeTrue();
      expect(nextButton.disabled).toBeTrue();
    });
  });
});
