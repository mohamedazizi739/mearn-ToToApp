import axios from "axios";
export const userRegister = (data) => async () => {
  try {
   await axios.post("https://to-do-app-azizi.herokuapp.com/api/register",data);
   return(null) 
  } catch (error) {

    return(error.response.data)
  }
};

export const userLogin = (data) => async (dispatch) => {
  try {
   const userLogin = await axios.post("https://to-do-app-azizi.herokuapp.com/api/login",data);
   if (userLogin.data){
      window.localStorage.setItem('token',userLogin.data.token );
      dispatch({type:"auth"})
      await dispatch(getTasks())
      }
   return(null)
    
  } catch (error) {
   
   return(error.response.data)
  }};

export const userAuth = (token) => async (dispatch) => {
  try {
  let config = {
   headers: {authorization:`bearer ${token}`} 
  }   
  const userAuth = await axios.post("https://to-do-app-azizi.herokuapp.com/api/auth",{},config);
  if (userAuth.data.msg){
    dispatch({type:"auth"})
    await dispatch(getTasks()) }
    return(null)
  } catch (error) {
    return(null)
  }};

  export const getTasks = () => async (dispatch) => {
  const token =await window.localStorage.getItem("token");
  try {
  let config = {
   headers: {authorization:`bearer ${token}`} 
  }   
  const tasks = await axios.get("https://to-do-app-azizi.herokuapp.com/api/task",config);
  if (tasks.data.tasks){
    dispatch({type:"tasks",payload:tasks.data.tasks}) 
    dispatch({type:"name",payload:tasks.data.name})   
    }
  return(null)
  } catch (error) {
    return(null)
  }};

  export const addTask = (newTask) => async (dispatch) => {
  dispatch({type:"loading"})
  const token =await window.localStorage.getItem("token");
  try {
  let config = {
   headers: {authorization:`bearer ${token}`} 
  }   
  const tasks = await axios.post("https://to-do-app-azizi.herokuapp.com/api/task",{taskName:newTask},config);
  await dispatch(getTasks())
  dispatch({type:"inloading"})
  return(null)  
  
  } catch (error) {
    dispatch({type:"inloading"})
    return(null)
  }};

  export const deleteTask = (id) => async (dispatch) => {
  const token =await window.localStorage.getItem("token");
  try {
  dispatch({type:"loading"})
  let headers={authorization:`bearer ${token}`} 
     
  const data = {id}  
   await axios.delete("https://to-do-app-azizi.herokuapp.com/api/task",{headers,data});
   dispatch(getTasks())
   dispatch({type:"inloading"})
   return(null)
   
  
  } catch (error) {
    dispatch({type:"inloading"})
    return(null)
  }};

  export const editTask = (id,taskName) => async (dispatch) => {
  dispatch({type:"loading"})
  const token =await window.localStorage.getItem("token");
  try {
  let config = {
   headers: {authorization:`bearer ${token}`} 
  }   
  const tasks = await axios.put("https://to-do-app-azizi.herokuapp.com/api/task",{taskName:taskName,id:id},config);
  dispatch(getTasks())
    dispatch({type:"inloading"})
  return(null)  
  
  } catch (error) {
      dispatch({type:"inloading"})

    return(null)
  }};

  export const userLoginFacebook = (data) => async (dispatch) => {
  try {
   const userLogin = await axios.post("https://to-do-app-azizi.herokuapp.com/api/loginf",data);
   if (userLogin.data){
      window.localStorage.setItem('token',userLogin.data.token );
      dispatch({type:"auth"})
      await dispatch(getTasks())
      }
   return(null)
    
  } catch (error) {
   
   return(error.response.data)
  }};

  