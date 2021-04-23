import './App.css';
import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Register from './components/Register'
import Profile from './components/Profile'
import {userAuth,getTasks} from './actions'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import axios from 'axios';
function App() {
  const dispatch = useDispatch()
  const [load, setload] = useState(true)
  useEffect(() => {
    const auth=async()=>{
    const token = window.localStorage.getItem("token");
    if(token){
      await dispatch(userAuth(token))
    };
    setload(false)
    }
    auth()
  }, []);
  
  return (load?<h1>loading...</h1>:
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Register   />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
