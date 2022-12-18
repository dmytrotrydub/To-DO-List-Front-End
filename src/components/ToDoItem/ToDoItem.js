import './ToDoItem.scss';
import Timer from '../Timer/Timer';
import { useEffect, useState } from 'react';

const ToDoItem = (props) => {
  const [itemData, setItem] = useState({ id: props.id, Description: props.description });

  return (
    <div className='tdi-wrapper'>
      <p className='tdi-descr'>{props.description}</p>
      <div className='tdi-wrapper__tmr-wrapper'>
        <Timer timerData={props.timerStart} />
        <button onClick={(e) => props.deleteTask(e, itemData)}>DELETE TASK</button>
      </div>
    </div>
  );
};

export default ToDoItem;
