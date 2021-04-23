import React,{useState,useEffect} from 'react';
import axios from 'axios'
import FacebookLogin from 'react-facebook-login';
import { FaFacebookF } from 'react-icons/fa'
import { useDispatch } from "react-redux";
import {userLoginFacebook} from "../actions"
const Facebook = ({setLoad}) => {
  const dispatch=useDispatch()
  const [key, setKey] = useState("")
 const responseFacebook = async(response) => {
   const id=response.id
   const token=response.accessToken
   setLoad(true)
   await dispatch(userLoginFacebook({id,token}))
   setLoad(false)}
  
 useEffect(() => {
  let unmounted=false
  const getkey=async()=>{
     const res=await axios.get("http://localhost:5000/api/fbApi").then(res=>{if(!unmounted)setKey(res.data.fbApi)})}
  getkey()
  return(()=>unmounted=true)
 }, [])
 return (
   <div>
    <FacebookLogin
    appId={"1477083012627750"}
    autoLoad={false}
    callback={responseFacebook}
    cssClass="my-facebook-button-class"
    textButton = "Login"
    icon={<FaFacebookF style={{width:"15px",marginRight:"8px"}}/>}/>
    </div>
    )
}


export default Facebook