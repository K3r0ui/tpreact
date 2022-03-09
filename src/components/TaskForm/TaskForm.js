import "./TaskForm.css";
import { useState } from "react";
export function TaskForm(props) {
  const addTask = "Add a task";
  const steps = [" Enter a title", " click on the button"];
  const [title, setTitle] = useState("");
  console.log("title", title);
  function handleAddTask() {
    props.addTask(title);
  }
  //props.say()
  return (
    <>
      <ul>
        {steps.map(function (x, index) {
          return <li key={index}>{x}</li>;
        })}

        {steps.map((step) => (
          <li style={{ color: "blue" }}>{step}</li>
        ))}
      </ul>
      <form action="" className="form">
        <input
          type="text"
          name="title"
          id=""
          value={title}
          onChange={(x) => setTitle(x.target.value)}
        />
        <button type="button" onClick={handleAddTask}>
          {addTask}
        </button>
        <h1>{title}</h1>
      </form>
      <h1> AMINOS</h1>
    </>
  );
}
