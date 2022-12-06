
import TaskInputForm from "../UID/InputForm/TaskInputForm";
import { useState } from 'react';

const Main = () => {
    const [taskInputForm, setTaskInputForm] = useState(false);

    const showInputForm = (e) => {
        e.preventDefault();
        setTaskInputForm(true)
    }

  return (
    <>
          <button type="button" onClick={showInputForm}children={'ADD TASK'} />       
          {taskInputForm===true ? <TaskInputForm/> : null}
    </>
  );
};

export default Main;
