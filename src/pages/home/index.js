import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import Input from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Home = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');


  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
      console.log('inputValue', inputValue, !!inputValue)
      if (inputValue) {
        navigate(inputValue);
      }
  };

  return (
    <div>
      <h1>React Redux Github Resume Builder</h1>

      <Input
        label="Enter GitHub name and click Generate or press Enter"
        variant="outlined"
        value={inputValue}
        onChange={handleInputChange}
      />
      <Button variant="contained" onClick={handleButtonClick}>Generate</Button>
    </div>
  );
};

export default Home;