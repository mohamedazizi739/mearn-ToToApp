const initialState={
 name:'',
 loading:false,
 error:'',
 auth:false,
 tasks:[]
}
const userReducer=(state=initialState,{type,payload})=>{
 switch(type){
  case "tasks":
   return({...state,tasks:payload})
  case "logOut":
   return({...state,auth:false})
  case "auth":
   return({...state,auth:true});
  case "loading":
   return({...state,loading:true});
  case "inloading":
   return({...state,loading:false});
   case "name":
   return({...state,name:payload});
  default:
  return state
 };
 

}
export default userReducer