import React, { useEffect, useCallback, useContext } from 'react';
import { useRouter } from 'next/router';

import Search from '../../components/Search';
import GithubCard from '../../components/GithubCard';
import Paginator from '../../components/Paginator';
import NoResults from '../../components/NoResults';

import * as GithubApi from '../../api/github';

import useLoading from '../../hooks/useLoading';
import useDebounce from '../../hooks/useDebounce';

import { UsersContext } from '../../contexts/Users';

import styles from './styles';

const MAX_ITEMS_PER_PAGE = 8;
let searchPrevent = null;

const Users = () => {
  const router = useRouter();

  const {
    search,
    users,
    setUsers,
    totalUsers,
    setTotalUsers,
    currentPage,
    setCurrentPage,
    haveUsers,
    onChangeSearch,
    onPrevPage,
    onNextPage,
  } = useContext(UsersContext);

  const debounceSearch = useDebounce(search);

  const {
    isLoading,
    startLoading,
    endLoading,
  } = useLoading();

  const onBack = useCallback(() => {
    router.back();
  }, [router]);

  const fetchUsers = async () => {
    startLoading();
    const githubUsers = await GithubApi.fetchUsers(search, currentPage, MAX_ITEMS_PER_PAGE);
    const usersWithData = await GithubApi.fetchUsersData(githubUsers.items);

    setUsers(usersWithData);
    setTotalUsers(githubUsers.total_count);
    endLoading();
  };

  useEffect(() => () => {
    searchPrevent = null;
  }, []);

  useEffect(() => {
    if (searchPrevent) setCurrentPage(1);
    searchPrevent = debounceSearch;
  }, [debounceSearch]);

  useEffect(() => {
    fetchUsers();
  }, [debounceSearch, currentPage]);

  return (
    <>
      <div className="container users__container">
        <div>
          <Search
            title="Usuarios"
            value={search}
            onBack={onBack}
            onChange={onChangeSearch}
            disabled={isLoading}
            isLoading={isLoading}
          />
        </div>
        {
          !haveUsers && <NoResults />
        }
        <div className="columns is-multiline">
          {
            users.map((user) => (
              <div key={user.id} className="column is-3 flex-center">
                <GithubCard
                  profileURL={user.html_url}
                  avatarURL={user.avatar_url}
                  userName={user.login}
                  repositories={user.public_repos?.toString() ?? '???'}
                  followers={user.followers?.toString() ?? '???'}
                  following={user.following?.toString() ?? '???'}
                />
              </div>
            ))
          }
        </div>
        {
          haveUsers && (
            <div>
              <Paginator
                currentPage={currentPage}
                totalItems={totalUsers}
                itemsPerPage={MAX_ITEMS_PER_PAGE}
                onPrevPage={onPrevPage}
                onNextPage={onNextPage}
                disabled={isLoading}
              />
            </div>
          )
        }
      </div>
      <style jsx>{styles}</style>
    </>
  );
};

export default Users;
