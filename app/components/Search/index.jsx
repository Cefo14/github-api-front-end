import React, { memo } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import styles from './styles';

const Search = ({
  title,
  value,
  onBack,
  onChange,
  disabled,
  isLoading,
}) => (
  <>
    <div
      data-testid="Search"
      className="search__container"
    >
      <div>
        <button
          data-testid="Search-GoBack"
          type="button"
          className="button search__button"
          onClick={onBack}
          disabled={disabled}
        >
          <span className="icon">
            <FontAwesomeIcon icon={faArrowLeft} />
          </span>
        </button>
        <span className="is-size-4">
          { title }
        </span>
      </div>
      <div
        className={clsx(
          'control',
          { 'is-loading': isLoading },
        )}
      >
        <input
          data-testid="Search-Input"
          className="input"
          type="text"
          placeholder="Buscar..."
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
      </div>
    </div>
    <style jsx>{styles}</style>
  </>
);

Search.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  onBack: PropTypes.func,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
};

Search.defaultProps = {
  title: '',
  value: '',
  onBack: () => {},
  onChange: () => {},
  disabled: false,
  isLoading: false,
};

export default memo(Search);
