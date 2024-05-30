import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import Input from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import { GENERATE, INPUT_PLACEHOLDER, INPUT_LABEL_TEXT } from "../../constants";

import styles from "./styles.module.scss";

const Form = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const navigateToResume = useCallback(() => navigate(inputValue), [navigate, inputValue]);

  useEffect(() => {
    const listener = (event) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        event.preventDefault();
        navigateToResume();
      }
    };

    document.addEventListener("keydown", listener);

    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [navigateToResume]);

  return (
    <div className={styles.form}>
      <div className={styles.item_wrapper}>
        <InputLabel>{INPUT_LABEL_TEXT}</InputLabel>
      </div>
      <div className={styles.item_wrapper}>
        <Input
          size="small"
          value={inputValue}
          label={INPUT_PLACEHOLDER}
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.item_wrapper}>
        <Button variant="contained" onClick={navigateToResume}>
          {GENERATE}
        </Button>
      </div>
    </div>
  );
};

export default Form;
