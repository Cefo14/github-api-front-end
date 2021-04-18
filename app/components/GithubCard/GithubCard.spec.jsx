import React from 'react';
import faker from 'faker';

import { render, screen } from '@testing-library/react';
import GithubCard from '.';

describe('GithubCard', () => {
  describe('when no have props', () => {
    it('should render the component', () => {
      render(<GithubCard />);
      expect(screen.getByTestId('GithubCard')).toBeInTheDocument();
    });
  });

  describe('when have user props', () => {
    it('should render the component with props', () => {
      const profileURL = faker.internet.url();
      const avatarURL = faker.internet.avatar();
      const userName = faker.random.word();
      const repositories = '1';
      const followers = '2';
      const following = '3';

      render(<GithubCard
        profileURL={profileURL}
        avatarURL={avatarURL}
        userName={userName}
        repositories={repositories}
        followers={followers}
        following={following}
      />);

      const element = screen.getByTestId('GithubCard');
      expect(element).toBeInTheDocument();
      expect(element).toHaveTextContent(userName);
      expect(element).toHaveTextContent(repositories);
      expect(element).toHaveTextContent(followers);
      expect(element).toHaveTextContent(following);
    });
  });

  describe('when have repository props', () => {
    it('should render the component with props', () => {
      const profileURL = faker.internet.url();
      const avatarURL = faker.internet.avatar();
      const userName = faker.random.word();
      const repository = 'repository name';
      const description = '..';
      const repositoryURL = faker.internet.url();

      render(<GithubCard
        profileURL={profileURL}
        avatarURL={avatarURL}
        userName={userName}
        repository={repository}
        description={description}
        repositoryURL={repositoryURL}
      />);

      const element = screen.getByTestId('GithubCard');
      expect(element).toBeInTheDocument();
      expect(element).toHaveTextContent(userName);
      expect(element).toHaveTextContent(repository);
      expect(element).toHaveTextContent(description);
    });
  });
});
