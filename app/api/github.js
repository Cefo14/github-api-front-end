import axios from 'axios';

const BASE_URL = 'https://api.github.com';
let isLock = false;

export const fetchUsers = async (query, page, itemsPerPage) => {
  try {
    const queryParams = `q=${query}&page=${page}&per_page=${itemsPerPage}`;
    const url = `${BASE_URL}/search/users?${queryParams}`;
    const { data } = await axios.get(url);
    return {
      total_count: data.total_count ?? 0,
      items: data.items ?? [],
    };
  }

  catch (e) {
    return {
      total_count: 0,
      items: [],
    };
  }
};

export const fetchUserData = async (user) => {
  const { data } = await axios.get(user.url);
  return data;
};

export const fetchUsersData = async (users = []) => {
  try {
    if (isLock) return users;
    const usersData = await Promise.all(
      users.map(async (user) => {
        const userData = await fetchUserData(user);
        return {
          ...user,
          id: user.id,
          avatar_url: userData.avatar_url,
          login: userData.login || '...',
          html_url: userData.html_url || 'https://github.com',
          public_repos: userData.public_repos,
          followers: userData.followers,
          following: userData.following,
        };
      }),
    );

    return usersData;
  }

  catch (e) {
    isLock = true;
    return users;
  }
};

export const fetchRepositories = async (query, page, itemsPerPage) => {
  try {
    const queryParams = `q=${query}&page=${page}&per_page=${itemsPerPage}`;
    const url = `${BASE_URL}/search/repositories?${queryParams}`;
    const { data } = await axios.get(url);
    return {
      total_count: data.total_count ?? 0,
      items: data.items ?? [],
    };
  }

  catch (e) {
    return {
      total_count: 0,
      items: [],
    };
  }
};
