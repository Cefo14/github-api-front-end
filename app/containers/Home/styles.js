import css from 'styled-jsx/css';

const styles = css`
  .home__container {
    padding: 32px;
    padding-bottom: 0px;
  }

  .home__container > div:not(:last-child) {
    padding-bottom: 32px;
  }

  .home__card-route-container {
    display: flex;
    width: 100%;
    max-width: 768px;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  @media (min-width: 768px) {
    .home__card-route-divider {
      display: none;
    }
  }

  @media (max-width: 767px) {
    .home__card-route-divider {
      width: 100%;
      margin-bottom: 32px;
    }
  }
`;

export default styles;
