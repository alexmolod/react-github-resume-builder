import React from "react";

import styles from "./styles.module.scss";

const ResumeRow = ({ title, content }) => {
  return (
    <div className={styles.row}>
      <div className={styles.title}>{title}</div>
      <div className={styles.text}>{content}</div>
    </div>
  );
};

export default ResumeRow;
