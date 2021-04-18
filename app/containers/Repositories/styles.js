import css from 'styled-jsx/css';

const styles = css`
  .repositories__container {
    padding: 32px;
  }

  .repositories__container > div:not(:last-child) {
    padding-bottom: 16px;
  }
`;

export default styles;
