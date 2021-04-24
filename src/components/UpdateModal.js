import React, { useState } from 'react';
import {Form,Button,Modal} from "react-bootstrap"
import EditIcon from '@material-ui/icons/Edit';
import { editTask } from '../actions';
import { useDispatch } from "react-redux";
const UpdateModal = (props) => {
 const {id,taskName}=props
  const [newName, setNewName] = useState(taskName)
  const [show, setShow] = useState(false);
  const handleClose = () => {setShow(false)};
  const handleShow = () =>{setShow(true);setNewName(taskName)};
  const dispatch=useDispatch()
  const savefunc=()=>{
   if(newName.trim()){
   dispatch(editTask(id,newName))
   handleClose()
  }}
 return (
  <div>
   <EditIcon className="icons" onClick={handleShow}/>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
         <Modal.Title>Edit task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <Form.Group >
         <Form.Label>Task name</Form.Label>
         <Form.Control value={newName} type="text" placeholder="task" onChange={(e)=>setNewName(e.target.value)} />
         </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={savefunc}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
  </div>
 )
}

export default UpdateModal
