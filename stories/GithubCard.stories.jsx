import React from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';

import GithubCard from '../app/components/GithubCard';

export const Main = () => {
  const profileURL = text('profileURL', 'https://github.com');
  const avatarURL = text('avatarURL', 'https://dummyimage.com/250x250/000/fff');
  const userName = text('userName', 'the user name');
  const repositories = text('repositories', '1');
  const followers = text('followers', '1');
  const following = text('following', '1');
  const repository = text('repository', 'repository name');
  const description = text('description', '...');
  const repositoryURL = text('repositoryURL', 'https://github.com');

  return (
    <GithubCard
      profileURL={profileURL}
      avatarURL={avatarURL}
      userName={userName}
      repositories={repositories}
      followers={followers}
      following={following}
      repository={repository}
      description={description}
      repositoryURL={repositoryURL}
    />
  );
};

export const User = () => {
  const profileURL = text('profileURL', 'https://github.com');
  const avatarURL = text('avatarURL', 'https://dummyimage.com/250x250/000/fff');
  const userName = text('userName', 'the user name');
  const repositories = text('repositories', '1');
  const followers = text('followers', '1');
  const following = text('following', '1');

  return (
    <GithubCard
      profileURL={profileURL}
      avatarURL={avatarURL}
      userName={userName}
      repositories={repositories}
      followers={followers}
      following={following}
    />
  );
};

export const Repository = () => {
  const profileURL = text('profileURL', 'https://github.com');
  const avatarURL = text('avatarURL', 'https://dummyimage.com/250x250/000/fff');
  const userName = text('userName', 'the user name');
  const repository = text('repository', 'repository name');
  const description = text('description', '...');
  const repositoryURL = text('repositoryURL', 'https://github.com');

  return (
    <GithubCard
      profileURL={profileURL}
      avatarURL={avatarURL}
      userName={userName}
      repository={repository}
      description={description}
      repositoryURL={repositoryURL}
    />
  );
};

export default {
  title: 'GithubCard',
  component: Main,
  decorators: [withKnobs],
};
