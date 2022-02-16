import './TaskForm.css'
  export function TaskForm(){
    const addTask = "Add a task";
    const steps =[ " Enter a title" , " click on the button" ]
    return(     
    <>
    <ul>
    {steps.map(function(x) {
      return ( <li>{x}</li>)
    })}
  
        {steps.map(step =>  (
      ( <li style={{color : "blue"}}>{step}</li>)
        ))}

    </ul>
    <form action="" className="form">
    <input type="text" name="task" id=""/>
    <button type="submit">{addTask}</button>
</form> 
<h1> AMINOS</h1>
</>

)
}
