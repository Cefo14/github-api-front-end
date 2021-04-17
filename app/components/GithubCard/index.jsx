import React, { memo } from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

const GithubCard = ({
  profileURL,
  avatarURL,
  userName,
  repositories,
  followers,
  following,
  repository,
  description,
  repositoryURL,
}) => (
  <>
    <div data-testid="GithubCard" className="card github-card__card">
      <div className="github-card__avatar_container">
        <a
          href={profileURL}
          target="_blank"
          rel="noreferrer"
        >
          <figure className="image is-128x128">
            <img
              alt="logo"
              loading="lazy"
              src={avatarURL}
              className="is-rounded"
              width="128px"
              height="128px"
            />
          </figure>
        </a>
      </div>
      <div className="is-size-3 github-card__overflow-text">
        <a
          href={profileURL}
          target="_blank"
          rel="noreferrer"
          title={`@${userName}`}
        >
          <center>
            <div>
              { `@${userName}` }
            </div>
          </center>
        </a>
      </div>
      <div>
        {
          repositories && (
            <div className="github-card__info">
              <div className="is-size-5">
                Repositorios
              </div>
              <div className="is-size-5">
                { repositories }
              </div>
            </div>
          )
        }
        {
          followers && (
            <div className="github-card__info">
              <div className="is-size-5">
                Seguidores
              </div>
              <div className="is-size-5">
                { followers }
              </div>
            </div>
          )
        }
        {
          following && (
            <div className="github-card__info">
              <div className="is-size-5">
                Siguiendo
              </div>
              <div className="is-size-5">
                { following }
              </div>
            </div>
          )
        }
        {
          repository && (
            <div className="github-card__repository-info">
              <div className="is-size-5 has-text-weight-bold">
                Repositorio
              </div>
              <div className="is-size-5 github-card__overflow-text">
                <a
                  href={repositoryURL}
                  target="_blank"
                  rel="noreferrer"
                  title={repository}
                >
                  { repository }
                </a>
              </div>
            </div>
          )
        }
        {
          description && (
            <div className="github-card__repository-info">
              <div className="is-size-5 has-text-weight-bold">
                Descripción
              </div>
              <div className="is-size-6">
                { description }
              </div>
            </div>
          )
        }
      </div>
    </div>
    <style jsx>{styles}</style>
  </>
);

GithubCard.propTypes = {
  profileURL: PropTypes.string,
  avatarURL: PropTypes.string,
  userName: PropTypes.string,
  repositories: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  followers: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  following: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  repository: PropTypes.string,
  description: PropTypes.string,
  repositoryURL: PropTypes.string,
};

GithubCard.defaultProps = {
  profileURL: '',
  avatarURL: '',
  userName: '',
  repositories: '',
  followers: '',
  following: '',
  repository: '',
  description: '',
  repositoryURL: '',
};

export default memo(GithubCard);
