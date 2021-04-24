import React,{useEffect,useState} from 'react'
import UpdateModal from './UpdateModal';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { useDispatch, useSelector } from "react-redux";
import {deleteTask} from '../actions'
import AddModal from './AddModal'
const Tasks = () => {
 const tasks=useSelector(state=>state.tasks)
 const load=useSelector(state=>state.loading)
 const setLoad=(v)=>{return(null)}
 const dispatch=useDispatch()
 const deleteF=(obj)=>{
   dispatch(deleteTask(obj['_id']))
 }

 return (load?<h1>loading...</h1>:
  <div >
   <AddModal setLoad={setLoad}/>
  {tasks.map((obj,i)=>{
   return(
    <div className="contailer">
       <div className="p" >{i} : {obj.taskName}</div>
       <div style={{display:"flex"}}>
          <UpdateModal id={obj['_id']} taskName={obj['taskName']} />
         <div className="icons" onClick={()=>deleteF(obj)} >
            <DeleteForeverIcon /> 
         </div>   
       </div>
    </div>
    )
  })} 
   
  </div>
 )
}

export default Tasks
