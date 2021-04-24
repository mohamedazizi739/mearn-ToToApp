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
<<<<<<< HEAD
    <div className="contailer">
       <div className="p" >{i} : {obj.taskName}</div>
       <div style={{display:"flex"}}>
          <UpdateModal id={obj['_id']} taskName={obj['taskName']} />
         <div className="icons" onClick={()=>deleteF(obj)} >
            <DeleteForeverIcon /> 
         </div>   
       </div>
=======
    <div key={obj['_id']} style={{display:"block",maxWidth:"500px",backgroundColor:"#008080",padding:"5px",marginBottom:"8px",marginTop:"8px",marginLeft:"auto",marginRight:"auto",borderRadius: "5px"}}>
    <span style={{color:"white",fontSize:"18px",wordBreak: "break-all"}} >{i} : {obj.taskName}</span>
    <div className="icons" onClick={()=>deleteF(obj)}><DeleteForeverIcon/></div>   
    <div className="icons"><UpdateModal id={obj['_id']} taskName={obj['taskName']} /></div>
>>>>>>> f06f6df258b7c18ee5708d98f34bbdb11cbe90ed
    </div>
    )
  })} 
   
  </div>
 )
}

export default Tasks
