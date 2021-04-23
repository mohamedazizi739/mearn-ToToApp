import React,{useState,useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {Modal,Button,Form} from 'react-bootstrap'
import { addTask } from '../actions';
import { set } from 'mongoose';
const AddModal = ({setLoad}) => {
 const [show, setShow] = useState(false);
 const [taskName, setTask] = useState('');
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch=useDispatch()
  const addTaskF=()=>{
   if(taskName.trim()){
  //  setLoad(true)
   dispatch(addTask(taskName))
   handleClose()
  //  setLoad(false)
   }
  }

 return (
  <div  >
   <div style={{display:"flex",justifyContent:"center",marginTop:"20px"}}>
   <Button variant="primary" onClick={handleShow}>
        Add task
    </Button></div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <Form.Group >
         <Form.Label>Task name</Form.Label>
         <Form.Control type="text" placeholder="task" onChange={(e)=>setTask(e.target.value)} />
         </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={
           addTaskF
           }>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
   
  </div>
 )
}

export default AddModal
