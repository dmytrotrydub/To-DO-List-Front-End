import ToDoItem from '../ToDoItem/ToDoItem';
import axios from 'axios';

import { useEffect, useState } from 'react';

const Dashboard = () => {
  const [listOfItems, setListOfItems] = useState([]);
  const [newItem, setNewItem] = useState(null);
  const [newItemData, setNewItemData] = useState({ Description: null });

  const [taskInputForm, setTaskInputForm] = useState(false);

  const handleItemData = (e) => {
    postTaskIntoDB(newItem);
    setNewItem(newItemData);
  };
  const postTaskIntoDB = (item) => {
    const header = {
      'Content-Type': 'text',
      charset: 'utf-8',
    };

    const postData = axios.post(
      `${process.env.REACT_APP_SERVER}${process.env.REACT_APP_PORT}/`,
      newItemData,
      header
    );

    postData
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const toDoData = axios.get(`${process.env.REACT_APP_SERVER}${process.env.REACT_APP_PORT}/`);

    toDoData
      .then((response) => {
        console.log(response.data);

        setListOfItems(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(`Invalid data received : ${error}`);
      });
  }, [newItem]);

  return (
    <div>
      <button
        type='button'
        onClick={(e) => {
          setTaskInputForm(true);
        }}
        children={'ADD TASK'}
      />
      {taskInputForm === true ? (
        <form onSubmit={(e) => handleItemData(e)}>
          <label htmlFor='task-input-form'>ENTER TASK TO TRACK</label>
          <input
            type='text'
            onChange={(e) => setNewItemData({ Description: e.target.value })}
            id='task-input-form'
            name='INPUT TASK'
          />
          <input type='submit' value='START TRACKING' />
        </form>
      ) : null}
      {listOfItems.map((item) => {
        return (
          <ToDoItem
            key={item.id}
            id={item.id}
            description={item.Description}
            dateUpdated={item.dateUpdated}
            timerStart={item.timerStart}
          />
        );
      })}
    </div>
  );
};

export default Dashboard;
