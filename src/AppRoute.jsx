import React,{Suspense, useEffect} from 'react';
import Navbar from './components/Navbar';
// import Sidebar from "./components/Sidebar"
// import Products from "./components/Products";
import ProductCreate from './components/ProductCreate';
import Login from "./components/Login";
import Dashboard from "./components/Dashboard"
import { Route,Routes,useNavigate } from 'react-router-dom';
import ProductChange from './components/ProductChange';
import ProductEdit from './components/ProductEdit';

const AppRoute = () => {
    const navigate = useNavigate();
    useEffect(() => {
      const userToken = localStorage.getItem("userToken");
      console.log(userToken)
      if (localStorage.getItem("userToken")) {
        navigate("/");
      } else {
        navigate("/login");
      }
    }, []);
  
    return (
      <>
      <Suspense fallback="Loading ...">
        <Routes>
          <Route index path="/" element={<Dashboard/>} />
          <Route path="/products" element={<><Navbar/><ProductChange /></>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path='/create' element={<><Navbar/><ProductCreate/></>}/>
          <Route path='/edit' element={<><Navbar/><ProductEdit/></>}/>
          <Route index path="*" element={<p> not found</p>} />
        </Routes>
      </Suspense>
      </>
    );
  };
  
  export default AppRoute;