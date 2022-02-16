import './Task.css'
  export function Task(props){
      function renderActions(){
          return(
        <div className="actions">
         <span>delete</span>
        
         <span>update</span>
        </div>
          )}
    return(         
    <div className="task">
    <div className="title">
      {props.title}
      </div>
    {renderActions()}
</div>)
}
