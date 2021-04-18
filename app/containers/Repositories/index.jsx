import React, { useEffect, useCallback, useContext } from 'react';
import { useRouter } from 'next/router';

import Search from '../../components/Search';
import GithubCard from '../../components/GithubCard';
import Paginator from '../../components/Paginator';
import NoResults from '../../components/NoResults';

import * as GithubApi from '../../api/github';

import useLoading from '../../hooks/useLoading';
import useDebounce from '../../hooks/useDebounce';

import { RepositoriesContext } from '../../contexts/Repositories';

import styles from './styles';

const MAX_ITEMS_PER_PAGE = 8;
let searchPrevent = null;

const Repositories = () => {
  const router = useRouter();

  const {
    search,
    repositories,
    setRepositories,
    totalRepositories,
    setTotalRepositories,
    currentPage,
    setCurrentPage,
    haveRepositories,
    onChangeSearch,
    onPrevPage,
    onNextPage,
  } = useContext(RepositoriesContext);

  const debounceSearch = useDebounce(search);

  const {
    isLoading,
    startLoading,
    endLoading,
  } = useLoading();

  const onBack = useCallback(() => {
    router.back();
  }, [router]);

  const fetchRepositories = async () => {
    startLoading();
    const githubRepositories = await GithubApi.fetchRepositories(
      search,
      currentPage,
      MAX_ITEMS_PER_PAGE,
    );

    setRepositories(githubRepositories.items);
    setTotalRepositories(githubRepositories.total_count);
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
    fetchRepositories();
  }, [debounceSearch, currentPage]);

  return (
    <>
      <div className="container repositories__container">
        <div>
          <Search
            title="Repositorios"
            value={search}
            onBack={onBack}
            onChange={onChangeSearch}
            disabled={isLoading}
            isLoading={isLoading}
          />
        </div>
        {
          !haveRepositories && <NoResults />
        }
        <div className="columns is-multiline">
          {
            repositories.map((repository) => (
              <div key={repository.id} className="column is-3 flex-center">
                <GithubCard
                  profileURL={repository.owner.html_url}
                  avatarURL={repository.owner.avatar_url}
                  userName={repository.owner.login}
                  repository={repository.name}
                  description={repository.description}
                  repositoryURL={repository.html_url}
                />
              </div>
            ))
          }
        </div>
        {
          haveRepositories && (
            <div>
              <Paginator
                currentPage={currentPage}
                totalItems={totalRepositories}
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

export default Repositories;
