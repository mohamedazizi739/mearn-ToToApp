import React,{useState} from 'react'
import{Form,Button} from 'react-bootstrap'
import { useDispatch } from "react-redux";
import {userRegister} from "../actions"
import Facebook from './Facebook'
const Registerpage = (props) => {
 const [load, setLoad] = useState(false)
 const dispatch=useDispatch()
  const setPage=props.setPage
  const [userName, setUserName] = useState("")
  const [emailR, setEmailR] = useState("")
  const [passwordR, setPasswordR] = useState("")
  const [error, setError] = useState("")

  const styleF={
  display: "block",marginLeft: "auto",marginRight: "auto",
  maxWidth:"400px",marginTop:"5%", backgroundColor: "#708090",
  padding:"5px",height:"382px",borderRadius:"10px"

 }
 const styleh3={textAlign:"center",color:"white"}

 const butClick = async(e) => {
    e.preventDefault()
    setError('')
    if(!userName||!emailR||!passwordR){
     setError('Complete all fields ');return(null)}
    const err=await dispatch(userRegister({name:userName,email:emailR,password:passwordR}));
    err?setError(err.msg):setPage('log in')
   }
 return (load?<h1>loading...</h1>:
  <div style={styleF}>
   <h2 style={styleh3}>Sign up (to do list)</h2>
   <Form onSubmit={butClick}>
   <Form.Group >
    <Form.Label>User name</Form.Label>
    <Form.Control type="name" placeholder="Full name" onChange={(e) => setUserName(e.target.value)} />
   </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmailR(e.target.value)} />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" value={passwordR}  onChange={(e) => setPasswordR(e.target.value)} />
  </Form.Group>
  <span style={{color:"red",float:"left"}}>{error}</span>
  <Button style={{width:"100%"}}  variant="primary"  
  type="submit" >
    Sign up
  </Button>
</Form>
 <h6 onClick={()=>setPage("log in")}>Sign in page</h6>
  <Facebook setLoad={setLoad} />

  </div>
 )
}

export default Registerpage
