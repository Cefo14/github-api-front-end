import React, { createContext, useMemo } from 'react';
import PropTypes from 'prop-types';

import useSearch from '../../hooks/useSearch';

export const UsersContext = createContext();

export const UsersContextProvider = ({ children }) => {
  const {
    search,
    items: users,
    setItems: setUsers,
    totalItems: totalUsers,
    setTotalItems: setTotalUsers,
    currentPage,
    setCurrentPage,
    haveItems: haveUsers,
    onChangeSearch,
    onPrevPage,
    onNextPage,
  } = useSearch();

  const value = useMemo(() => ({
    search,
    users,
    setUsers,
    totalUsers,
    setTotalUsers,
    currentPage,
    setCurrentPage,
    haveUsers,
    onChangeSearch,
    onPrevPage,
    onNextPage,
  }),
  [
    search,
    users,
    setUsers,
    totalUsers,
    setTotalUsers,
    currentPage,
    setCurrentPage,
    haveUsers,
    onChangeSearch,
    onPrevPage,
    onNextPage,
  ]);

  return (
    <UsersContext.Provider value={value}>
      { children }
    </UsersContext.Provider>
  );
};

UsersContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};
