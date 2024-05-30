import React from 'react';

import styles from './styles.module.scss';

const Repos = ({ reposData }) => {
  const sortedByDateDesc = reposData
    .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
    .slice(0, 10);

  return (
    <>
      {sortedByDateDesc.map((repo, index) => (
        <div key={repo.name}>
          <div className={styles.repo_name}>
            <span>{index + 1}. </span>
            {repo.name}
          </div>
          <a target="_blank" rel="noreferrer" href={repo.html_url}>
            {repo.html_url}
          </a>
        </div>
      ))}
    </>
  );
};

export default Repos;
