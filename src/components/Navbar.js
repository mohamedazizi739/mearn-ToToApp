import React from 'react'
import { useDispatch } from "react-redux";
const Navbar = () => {
 const styleG={display:"flex",width:"100%",height:"50px",alignItems:"center",backgroundColor:"black",paddingLeft:"2%",paddingRight:"2%",justifyContent:"space-between"}
 const styleL={display:"flex",width:"150px",alignItems:"center", height:"100%"}
 const  dispatch = useDispatch()
 return (
  <div style={styleG}>
   <div style={styleL}>
   <img className="logo" src="https://cdn.dribbble.com/users/1063591/screenshots/5547137/lists_-_to_do_app_icon_4x.png?compress=1&resize=400x300" alt=""/>
   <h5 >ToDoList</h5>
   </div>
   <div >
   <span onClick={()=>{localStorage.clear();dispatch({type:"logOut"})}} >Log out</span>
   </div>
  </div>
 )
}

export default Navbar
