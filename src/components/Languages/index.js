import React from 'react';
import { useSelector } from 'react-redux';

import { getPercentage, sumObjectsByKey } from '../../utils';

import styles from './styles.module.scss';

const Languages = () => {
  const languagesData = useSelector(state => state.data.languages).map(item => item.data);
  const sumAllLanguages = sumObjectsByKey(languagesData);
  const total = Object.values(sumAllLanguages).reduce((a, b) => a + b, 0);

  return (
    <>
      {Object.entries(sumAllLanguages).map(([key,value]) => (
        <div key={key}><span className={styles.name}>{key}</span> : {getPercentage(value, total)} %</div>
      ))}
    </>
  );
};

export default Languages;