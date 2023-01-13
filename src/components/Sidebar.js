import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
// import Products from "./Products"
import "../css/Sidebar.css"

const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const[username,setUsername]=useState("")

    useEffect(()=>{
        setUsername(localStorage.getItem('username'));
    },[])
    const toggle = (x) =>
        setIsOpen(!isOpen);
    const menuItem = [
        {
            path:"/dashboard",
            name:"Dashboard",
            icon:<i className='fas fa-home' style={{ fontSize: "30px" }}></i>
        },
        {
            path: "/products",
            name: "Products Control",
            icon: <i className="fas fa-shopping-cart" style={{ fontSize: "30px" }}></i>
        }
        
    ]
    return (
        <div className="container-2">
            <div style={{ width: isOpen ? "15vw" : "4vw" }} className="sidebar" onClick={toggle} >
                <div className="top_section">
                <i className= {isOpen ? "fas fa-toggle-on" : "fas fa-toggle-off"} style={{fontSize:"36px"}} ></i>
                <i className="	fas fa-user-tie" style={{ fontSize: isOpen ? "100px" : "50px" }}></i>
                <h2 className='welcome-text' style={{ display: isOpen ? "block" : "none" }}>Welcome, {username}</h2>
                </div>
                {
                    menuItem.map((item, index) => (
                        <Link to={item.path} key={index} className="link">
                            <div className="icon">{item.icon}</div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                        </Link>
                        
                    ))
                }
                
            </div>
            {/* <main>{children}</main> */}
        </div>
    );
};


export default Sidebar