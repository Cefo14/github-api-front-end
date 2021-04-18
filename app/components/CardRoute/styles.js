import css from 'styled-jsx/css';

const styles = css`
  .card-route__card {
    padding: 32px;
    border-radius: 16px;
    width: 100%;
    max-width: 300px;
  }

  .card-route__card:hover {
    cursor: pointer;
  }

  .card-route__card-avatar-container {
    display: flex;
    justify-content: center;
    padding-bottom: 24px;
  }

  .card-route__card-avatar-container img {
    width: 128px;
    height: 128px;
    object-fit: cover;
  }
`;

export default styles;
