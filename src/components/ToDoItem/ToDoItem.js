import './ToDoItem.scss';
import Timer from '../Timer/Timer';

const ToDoItem = (props) => {


  return (
    <div className='tdi-wrapper'>
      <p className ='tdi-descr'>{props.description}</p>
      <Timer timerData={props.timerStart} />
    </div>
  );
};

export default ToDoItem;
