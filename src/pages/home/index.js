import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

import Form from "../../components/Form";
import {
  APP_TITLE,
  REQUEST_WITH_ERROR,
  TOAST_ERROR_TEXT_404,
  TOAST_ERROR_TEXT_403,
  ERROR_STATUS_CODE_403,
} from "../../constants";

import styles from "./styles.module.scss";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const errorCode = searchParams.get(REQUEST_WITH_ERROR);

  useEffect(() => {
    if (errorCode) {
      let errMEssage = TOAST_ERROR_TEXT_404;

      if (errorCode === ERROR_STATUS_CODE_403)
        errMEssage = TOAST_ERROR_TEXT_403;

      toast.error(errMEssage);
      setSearchParams();
    }
  }, [setSearchParams, errorCode]);

  return (
    <div className={styles.home}>
      <h1>{APP_TITLE}</h1>

      <Form />
    </div>
  );
};

export default Home;
