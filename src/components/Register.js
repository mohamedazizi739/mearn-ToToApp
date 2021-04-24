import React,{useState} from 'react'
import LoginPage from './LoginPage'
import {useSelector } from "react-redux";
import RegisterPage from './Registerpage';
import  { Redirect } from 'react-router-dom'
const Register = ({fbApi}) => {
 const userAuth = useSelector((state) => state.auth);
 const [page, setPage] = useState('register')
 
 if(userAuth){return(<Redirect to='/profile'  />)}
 if(page==='register') {return <RegisterPage fbApi={fbApi} setPage={setPage} /> } 
 return (

 <LoginPage setPage={setPage}/>
 )
}

export default Register

