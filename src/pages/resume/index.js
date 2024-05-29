import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getFormattedDate } from '../../utils';

import { fetchData } from '../../redux/actions/dataActions';

const DynamicRoute = () => {
  const { gitUserName } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const data = useSelector(state => state.data);
  const { name, public_repos, created_at } = data.data;


  console.log('data', data)
  console.log('created_at', created_at)
  const memberFrom = getFormattedDate(created_at);

  useEffect(() => {
    dispatch(fetchData(gitUserName));
  }, [dispatch, gitUserName]);

  useEffect(() => {
    if (data.error) {
      navigate('/?userNotFound');
    }
  }, [navigate, data]);

  return (
    <div>
      <p>gitUserName: {gitUserName}</p>
      <p>Name: {name || 'User dont have Full Name on GitHub'}</p>
      <p>Number of public repos: {public_repos}</p>
      <p>Member from: {memberFrom}</p>
    </div>
  );
};

export default DynamicRoute;