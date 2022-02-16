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
<Task title="Learn HTML" aa="520"/>
<Task title="learn  REACT" details={{type:'LOL', startDate:'2022-12-12'}}/>
<Task title="Learn angular" duration={60}/>
</>
)}
    </div>
  );

} 