import css from 'styled-jsx/css';

const styles = css`
  .github-card__card {
    width: 100%;
    max-width: 362px;
    padding: 32px;
    border-radius: 16px;
  }

  .github-card__card > div:not(:last-child) {
    padding-bottom: 16px;
  }

  .github-card__avatar_container {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
  }

  .github-card__info {
    display: flex;
    justify-content: space-between;
  }

  .github-card__overflow-text {
    text-overflow: ellipsis;
    overflow: hidden;
    display: block;
  }

  .github-card__repository-info {
    padding-bottom: 16px;
  }
`;

export default styles;
