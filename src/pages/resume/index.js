import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Repos from '../../components/Repos';
import { getFormattedDate } from '../../utils';
import Languages from '../../components/Languages';
import { REQUEST_WITH_ERROR, FULL_NAME_ERROR_TEXT } from '../../constants';
import { fetchUserMainData, fetchUserReposData, fetchLanguagesData } from '../../redux/actions/dataActions';

import styles from './styles.module.scss';

const Resume = () => {
  const { gitUserName } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const mainUserData = useSelector(state => state.data.mainUserData);
  const reposUserData = useSelector(state => state.data.userRepos);
  const error = useSelector(state => state.data.error);

  const { name, public_repos, created_at } = mainUserData;
  const memberFrom = getFormattedDate(created_at);

  useEffect(() => {
    dispatch(fetchUserMainData(gitUserName));
    dispatch(fetchUserReposData(gitUserName));
  }, [dispatch, gitUserName]);

  useEffect(() => {
    if (reposUserData.length > 0) {
      const reposNamesArr = reposUserData.map(repo => repo.name);

      dispatch(fetchLanguagesData(gitUserName, reposNamesArr));
    }

  }, [dispatch, reposUserData, gitUserName]);

  useEffect(() => {
    if (error) {
      navigate(`/?${REQUEST_WITH_ERROR}=${error.request.status}`);
    }
  }, [navigate, error]);

  return (
    <div className={styles.resume_page}>
      <div className={styles.resume}>
        
        <div className={styles.row}>
          <div className={styles.title}>
            GitHub User Name:
          </div>
          <div className={styles.text}>
            {gitUserName}
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.title}>
            Name:
          </div>
          <div className={styles.text}>
            {name || FULL_NAME_ERROR_TEXT}
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.title}>
            Number of public repos:
          </div>
          <div className={styles.text}>
            {public_repos}
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.title}>
            Member from:
          </div>
          <div className={styles.text}>
            {memberFrom}
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.title}>
            Used programming languages:
          </div>
          <div className={styles.text}>
            <Languages/>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.title}>
            Most recently edited public repositories:
          </div>
          <div className={styles.text}>
            <Repos reposData={reposUserData} />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Resume;