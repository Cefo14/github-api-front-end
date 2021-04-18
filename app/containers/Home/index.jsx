import React from 'react';

import CardRoute from '../../components/CardRoute';

import githubLogoImage from '../../assets/images/github-logo.png';
import githubUserImage from '../../assets/images/github-users.png';
import githubRepositoriesImage from '../../assets/images/github-repositories.png';

import styles from './styles';

const Home = () => (
  <>
    <div data-testid="Home" className="home__container">
      <div className="flex-center">
        <img
          alt="github-logo"
          src={githubLogoImage}
          width="300px"
          height="auto"
          loading="lazy"
        />
      </div>
      <div className="flex-center">
        <div className="home__card-route-container">
          <CardRoute
            title="Buscar Usuarios"
            imageURL={githubUserImage}
            routePath="/users"
          />
          <div className="home__card-route-divider" />
          <CardRoute
            title="Buscar Repositorios"
            imageURL={githubRepositoriesImage}
            routePath="/repositories"
          />
        </div>
      </div>
    </div>
    <style jsx>{styles}</style>
  </>
);

export default Home;
