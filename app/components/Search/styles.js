import css from 'styled-jsx/css';

const styles = css`
  .search__container > div:not(:last-child) {
    margin-bottom: 8px;
  }

  .search__header {
    display: flex;
    align-items: center;
  }

  .search__button {
    border: none;
    font-size: 10px;
    background-color: transparent;
    margin-right: 4px;
  }
`;

export default styles;
