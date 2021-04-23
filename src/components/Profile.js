import React from 'react'
import {useSelector } from "react-redux";
import  { Redirect } from 'react-router-dom'
import Navbar from './Navbar'
import Tasks from './Tasks'
const Profile = (props) => {
  const name = useSelector(state => state.name)
  const userAuth = useSelector((state) => state.auth);
 return (!userAuth?<Redirect to="/" />:
  <div>  
   <Navbar />
   {name?<h1>Welcome {name}</h1>:<></>}
   <Tasks />
  </div>
 )
}

export default Profile
