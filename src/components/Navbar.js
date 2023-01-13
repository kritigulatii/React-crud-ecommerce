import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import "../css/Navbar.css";
import Sidebar from "./Sidebar";
// import Products from "./Products";

const Navbar = () => {
  const[username,setUsername]=useState("")

    useEffect(()=>{
        setUsername(localStorage.getItem('username'));
    },[])
  const navigate = useNavigate();
  const logOutHandler = () => {
    const confirm = prompt(` ${username} Are You Sure You Want To Leave?  y / n`);
    if (confirm === "y") {
    localStorage.clear();
    navigate("/login")
  }
  else{
    return
  };
}
  return (
    <div className="side-nav">
    
      <div className="navigation">
        <nav className="navbar">
          <div className="nav-links">
            <h1><i className='fas fa-user-shield' style={{ fontSize: "36px" }}></i> {username}</h1>
              <button className="log-out-btn" onClick={() => { logOutHandler() }}>
                <i className="fa fa-power-off" style={{ fontSize: "36px" }}></i>
              </button> 
          </div>
        </nav>
      </div>
      <Sidebar/>
    </div>
  );
};

export default Navbar;
