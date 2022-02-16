import './Task.css'
  export function Task(){
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
        Learn Html
    </div>
    {renderActions()}
</div>)
}
