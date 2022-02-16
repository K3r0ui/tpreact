import './TaskPage.css'
import {Task} from '../components/Task/Task';
import {TaskForm} from '../components/TaskForm/TaskForm';
export default function TaskPage(){
    
  const loading = false;
  return (
    <div className="App">
      
{loading ? ( <div> loading... </div> ) : (
  <>
<TaskForm/>
<Task title="Learn HTML"/>
<Task title="learn  REACT"/>
<Task title="Learn angular"/>
</>
)}
    </div>
  );

} 