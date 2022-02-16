import './Task.css'
// CETTE METHODE ON PEUT ASSIGNER DES VALEURS
  export function Task({title,duration,details , type , startDate}){
    //console.log(props)  //aaa=520
    //propos.duration = accede lel propos duration
    //pour ajouter une balise html 
    //{props.details.type} - on a besoin de react developer tools
    // fama component = react developer tools

    //TODO: fzefezf
      
    
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
      {title}
      {duration && <span>{duration}MN</span>}
      {/* {details && (
        <>
        {details.type}
        {details.startDate}
        </>
      )} */}
      {type}
      {startDate}
      
      </div>
    {renderActions()}
</div>)
}
// export function Task(props){
//   //console.log(props)  //aaa=520
//   //propos.duration = accede lel propos duration
//   //pour ajouter une balise html 
//   //{props.details.type} - on a besoin de react developer tools
//   // fama component = react developer tools

//   //TODO: fzefezf
//     function renderActions(){
//         return(
//       <div className="actions">
//        <span>delete</span>
      
//        <span>update</span>
//       </div>
//         )}
//   return(         
//   <div className="task">
//   <div className="title">
//     {props.title}
//     {props.duration && <span>{props.duration}MN</span>}
//     {props.details && (
//       <>
//       {props.details.type}
//       {props.details.startDate}
//       </>
//     )}
    
//     </div>
//   {renderActions()}
// </div>)
// }
