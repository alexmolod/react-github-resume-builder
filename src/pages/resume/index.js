import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Repos from "../../components/Repos";
import { getFormattedDate } from "../../utils";
import ResumeRow from "../../components/ResumeRow";
import Languages from "../../components/Languages";
import { REQUEST_WITH_ERROR, FULL_NAME_ERROR_TEXT } from "../../constants";
import {
  fetchUserMainData,
  fetchUserReposData,
  fetchLanguagesData,
} from "../../redux/actions/dataActions";

import styles from "./styles.module.scss";

const Resume = () => {
  const { gitUserName } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const mainUserData = useSelector((state) => state.data.mainUserData);
  const reposUserData = useSelector((state) => state.data.userRepos);
  const error = useSelector((state) => state.data.error);

  const { name, public_repos, created_at } = mainUserData;
  const memberFrom = getFormattedDate(created_at);

  useEffect(() => {
    dispatch(fetchUserMainData(gitUserName));
    dispatch(fetchUserReposData(gitUserName));
  }, [dispatch, gitUserName]);

  useEffect(() => {
    if (reposUserData.length > 0) {
      const reposNamesArr = reposUserData.map((repo) => repo.name);

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
        <ResumeRow title="GitHub User Name:" content={gitUserName} />
        <ResumeRow title="Name:" content={name || FULL_NAME_ERROR_TEXT} />
        <ResumeRow title="Number of public repos:" content={public_repos} />
        <ResumeRow title="Member from:" content={memberFrom} />
        <ResumeRow content={<Languages />} title="Used programming languages:" />
        <ResumeRow
          content={<Repos reposData={reposUserData} />}
          title="Most recently edited public repositories:"
        />
      </div>
    </div>
  );
};

export default Resume;
