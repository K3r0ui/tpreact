import './TaskPage.css'
//import {Task} from '../components/Task/Task';
import {TaskForm} from '../components/TaskForm/TaskForm';
import TaskList from '../components/TaskList/TaskList';
export default function TaskPage(){
  const tasks= [
    {
      id:1,
      title:"learn HTML",
      duration:60,
      startDate:"2022-12-12",
    },
      {
      id:2,
      title:"learn CSS",
      duration:60,
      startDate:"2012-12-12",

    },
    {
      id:3,
      title:"learn REACT",
      duration:10,
      startDate:"2032-12-12"

    }
  ] 
  const loading = false;
  function sayHello(){
    alert("sayHelo")
  }
  return (

    <div className="App">
      
{loading ? ( <div> loading... </div> ) : (
  <>
<TaskForm say={sayHello}/>
<TaskList  myTasks={tasks}/>
</>
)}
    </div>
  );

} 