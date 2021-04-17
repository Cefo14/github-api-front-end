import css from 'styled-jsx/css';

const styles = css`
  .users__container {
    padding: 32px;
  }

  .users__container > div:not(:last-child) {
    padding-bottom: 16px;
  }
`;

export default styles;
