import React,{useState} from 'react'
import{Form,Button} from 'react-bootstrap'
import { useDispatch } from "react-redux";
import {userLogin} from "../actions"

const LoginPage = (props) => {
  const dispatch = useDispatch()
  const setPage=props.setPage
  const [emailL, setEmailL] = useState("")
  const [passwordL, setPasswordL] = useState("")
  const [error, setError] = useState('')
  const styleF={
  display: "block",marginLeft: "auto",marginRight: "auto",
  maxWidth:"400px",marginTop:"5%", backgroundColor: "#708090",
  padding:"5px",height:"294px",borderRadius:"10px"

 }
 const styleh3={textAlign:"center",color:"white"}
 const butClick = async(e) => {
    e.preventDefault()
    setError('')
    if(!emailL||!passwordL){
    setError('Complete all fields ');return(null)}
    const err=await dispatch(userLogin({email:emailL,password:passwordL}));
    if(err){setError(err.msg)}
   }
 return (
  <div style={styleF}>
   <h2 style={styleh3}>Sign in (to do list)</h2>
   <Form onSubmit={butClick}>

  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmailL(e.target.value)} />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" value={passwordL}  onChange={(e) => setPasswordL(e.target.value)} />
  </Form.Group>
   <span style={{color:"red",float:"left"}}>{error}</span>
  <Button style={{width:"100%"}} variant="primary" type="submit">
    Sign in
  </Button>
  </Form>
  <h6 onClick={()=>setPage("register")}>Sign up page</h6>
  </div>
 )
}

export default LoginPage
