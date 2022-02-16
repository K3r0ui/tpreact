import './TaskList.css'
import {Task} from '../Task/Task';
//            {/* Warning: Each child in a list should have a unique "key" prop. Check the render method of `TaskList`. See https://reactjs.org/link/warning-keys for more information. at Task (http://localhost:3000/main.28abd9563f4b0bca8a84.hot-update.js:269:24) at TaskList (http://localhost:3000/main.c981bdaa59284ada2da3.hot-update.js:27:21) at div at TaskPage at Route (http://localhost:3000/static/js/bundle.js:37860:29) at Switch (http://localhost:3000/static/js/bundle.js:38062:29) at Router (http://localhost:3000/static/js/bundle.js:37495:30) at BrowserRouter (http://localhost:3000/static/js/bundle.js:37116:35) at div at App
function TaskList(props) {
    return ( <div>
        {props.myTasks.map(function(x){
        return (
            <Task

            key={x.id}
            title={x.title}
            duration={x.duration}
            //details={x.details}
            type={x.type}
            startDate={x.startDate}
            /> )

})}
{/*
function TaskList(props) {
    return ( <div>
        {props.myTasks.map(function(x){
        return (
            <Task

            key={x.id}
            title={x.title}
            duration={x.duration}
            details={x.details}
            /> )

})} */}
 
        {/*
        <Task title="Learn HTML" aa="520"/>
        <Task title="learn  REACT" details={{type:'LOL', startDate:'2022-12-12'}}/>
        <Task title="Learn angular" duration={60}/>
        */}
        </div>
        );
}

export default TaskList;