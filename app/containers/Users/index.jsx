import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
} from 'react';
import { useRouter } from 'next/router';

import Search from '../../components/Search';
import GithubCard from '../../components/GithubCard';
import Paginator from '../../components/Paginator';
import NoResults from '../../components/NoResults';

import * as GithubApi from '../../api/github';

import useLoading from '../../hooks/useLoading';
import useDebounce from '../../hooks/useDebounce';

import styles from './styles';

const MAX_ITEMS_PER_PAGE = 8;

const Users = () => {
  const router = useRouter();

  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalUsers, setTotalUsers] = useState(1);
  const [users, setUsers] = useState([]);

  const {
    isLoading,
    startLoading,
    endLoading,
  } = useLoading();

  const debounceSearch = useDebounce(search);

  const haveUsers = useMemo(() => (
    users && users.length > 0
  ), [users]);

  const onBack = useCallback(() => {
    router.back();
  }, [router]);

  const onChangeSearch = useCallback((event) => {
    setSearch(event.target.value);
  }, []);

  const goToPrevPage = useCallback(() => {
    setCurrentPage(Number.parseInt(currentPage, 10) - 1);
  }, [currentPage]);

  const goToNextPage = useCallback(() => {
    setCurrentPage(Number.parseInt(currentPage, 10) + 1);
  }, [currentPage]);

  const fetchUsers = async () => {
    startLoading();
    const githubUsers = await GithubApi.fetchUsers(search, currentPage, MAX_ITEMS_PER_PAGE);
    const usersWithData = await GithubApi.fetchUsersData(githubUsers.items);

    setUsers(usersWithData);
    setTotalUsers(githubUsers.total_count);
    endLoading();
  };

  useEffect(() => {
    setCurrentPage(1);
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
                onPrevPage={goToPrevPage}
                onNextPage={goToNextPage}
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
