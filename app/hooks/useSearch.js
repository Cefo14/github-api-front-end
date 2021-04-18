import { useState, useCallback, useMemo } from 'react';

const useSearch = () => {
  const [search, setSearch] = useState('');
  const [items, setItems] = useState([]);
  const [totalItems, setTotalItems] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const haveItems = useMemo(() => (
    items && items.length > 0
  ), [items]);

  const onChangeSearch = useCallback((event) => {
    setSearch(event.target.value);
  }, []);

  const onPrevPage = useCallback(() => {
    setCurrentPage(Number.parseInt(currentPage, 10) - 1);
  }, [currentPage]);

  const onNextPage = useCallback(() => {
    setCurrentPage(Number.parseInt(currentPage, 10) + 1);
  }, [currentPage]);

  const result = useMemo(
    () => ({
      search,
      setSearch,
      items,
      setItems,
      totalItems,
      setTotalItems,
      currentPage,
      setCurrentPage,
      haveItems,
      onChangeSearch,
      onPrevPage,
      onNextPage,
    }),
    [
      search,
      setSearch,
      items,
      setItems,
      totalItems,
      setTotalItems,
      currentPage,
      setCurrentPage,
      haveItems,
      onChangeSearch,
      onPrevPage,
      onNextPage,
    ],
  );

  return result;
};

export default useSearch;
