import './Task.css'
  export function Task(props){
    //console.log(props)  //aaa=520
    //propos.duration = accede lel propos duration
    //pour ajouter une balise html 
    //{props.details.type} - on a besoin de react developer tools
    // fama component = react developer tools tsab
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
      {props.duration && <span>{props.duration}MN</span>}
      
      </div>
    {renderActions()}
</div>)
}
