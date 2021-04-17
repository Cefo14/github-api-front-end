import React, { memo, useMemo } from 'react';
import PropTypes from 'prop-types';

const Paginator = ({
  currentPage,
  itemsPerPage,
  totalItems,
  onPrevPage,
  onNextPage,
  disabled,
}) => {
  const totalPages = useMemo(() => (
    Math.floor(totalItems / itemsPerPage) || 1
  ), [itemsPerPage, totalItems]);

  return (
    <nav
      data-testid="Paginator"
      className="pagination"
      role="navigation"
      aria-label="pagination"
    >
      {
        currentPage > 1 && (
          <button
            data-testid="Paginator-PrevButton"
            type="button"
            onClick={onPrevPage}
            className="pagination-previous"
            disabled={disabled}
          >
            Página Anterior
          </button>
        )
      }
      {
        currentPage !== totalPages && (
          <button
            data-testid="Paginator-NextButton"
            type="button"
            onClick={onNextPage}
            className="pagination-previous"
            disabled={disabled}
          >
            Página Siguiente
          </button>
        )
      }
      <ul className="pagination-list">
        <li>
          <span>
            { `Pagina ${currentPage} de ${totalPages}` }
          </span>
        </li>
      </ul>
    </nav>
  );
};

Paginator.propTypes = {
  currentPage: PropTypes.number,
  itemsPerPage: PropTypes.number,
  totalItems: PropTypes.number,
  onPrevPage: PropTypes.func,
  onNextPage: PropTypes.func,
  disabled: PropTypes.bool,
};

Paginator.defaultProps = {
  currentPage: 1,
  itemsPerPage: 1,
  totalItems: 1,
  onPrevPage: () => {},
  onNextPage: () => {},
  disabled: false,
};

export default memo(Paginator);
