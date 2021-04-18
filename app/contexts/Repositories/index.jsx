import React, { createContext, useMemo } from 'react';
import PropTypes from 'prop-types';

import useSearch from '../../hooks/useSearch';

export const RepositoriesContext = createContext();

export const RepositoriesContextProvider = ({ children }) => {
  const {
    search,
    items: repositories,
    setItems: setRepositories,
    totalItems: totalRepositories,
    setTotalItems: setTotalRepositories,
    currentPage,
    setCurrentPage,
    haveItems: haveRepositories,
    onChangeSearch,
    onPrevPage,
    onNextPage,
  } = useSearch();

  const value = useMemo(() => ({
    search,
    repositories,
    setRepositories,
    totalRepositories,
    setTotalRepositories,
    currentPage,
    setCurrentPage,
    haveRepositories,
    onChangeSearch,
    onPrevPage,
    onNextPage,
  }),
  [
    search,
    repositories,
    setRepositories,
    totalRepositories,
    setTotalRepositories,
    currentPage,
    setCurrentPage,
    haveRepositories,
    onChangeSearch,
    onPrevPage,
    onNextPage,
  ]);

  return (
    <RepositoriesContext.Provider value={value}>
      { children }
    </RepositoriesContext.Provider>
  );
};

RepositoriesContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};
