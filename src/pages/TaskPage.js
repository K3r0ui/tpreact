import "./TaskPage.css";
//import {Task} from '../components/Task/Task';
import { TaskForm } from "../components/TaskForm/TaskForm";
import TaskList from "../components/TaskList/TaskList";
import { useState } from "react";

export default function TaskPage() {
  const [isVisible, setIsVisible] = useState(false);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "learn HTML",
      duration: 60,
      type: "IT",
      startDate: "2022-12-12",
    },
    {
      id: 2,
      title: "learn CSS",
      duration: 60,
      type: "IT",
      startDate: "2012-12-12",
    },
    {
      id: 3,
      title: "learn REACT",
      duration: 10,
      type: "IT",
      startDate: "2032-12-12",
    },
  ]);

  const loading = false;
  function sayHello() {
    alert("sayHelo");
  }
  function addTask(title) {
    setTasks([...tasks, { id: tasks.length + 1, title: title }]);
    //setTaks([...tasks,{id:tasks.length}])
  }
  function toogleVisibility() {
    setIsVisible(!isVisible);
  }
  console.log(isVisible);
  return (
    <div className="App">
      <button onClick={toogleVisibility}>Toogle</button>
      {loading ? (
        <div> loading... </div>
      ) : (
        isVisible && (
          <>
            <TaskForm addTask={addTask} />
            {/* <TaskForm say={sayHello} /> */}
            <TaskList myTasks={tasks} />
          </>
        )
      )}
    </div>
  );
}
