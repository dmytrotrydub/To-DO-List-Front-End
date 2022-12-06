import { useState } from 'react';
import axios from 'axios';

const InputForm = () => {
  const [itemDescription, setItemDescription] = useState({});

  const describeTask = (e) => {
    console.log(e.target.value);
    setItemDescription({ Description: e.target.value });
  };

  const postTaskIntoDB = (e) => {
    e.preventDefault();
    const header = {
      'Content-Type': 'text',
      charset: 'utf-8',
    };

    const postData = axios.post(
      `${process.env.REACT_APP_SERVER}${process.env.REACT_APP_PORT}/`,
      itemDescription,
      header
    );

    postData
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  };
  return (
    <form onSubmit={(e) => postTaskIntoDB(e)}>
      <label htmlFor='task-input-form'>ENTER TASK TO TRACK</label>
      <input type='text' onChange={describeTask} id='task-input-form' name='INPUT TASK' />
      <input type='submit' value='START TRACKING' />
    </form>
  );
};

export default InputForm;
