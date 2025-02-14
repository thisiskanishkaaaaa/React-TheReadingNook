// src/App.js
import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter,Routes,Route, useLocation } from "react-router";
import About from "./components/About";
import BookShelf from "./components/BookShelf";
import './styles.css';
import Page from "./components/page";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";

const App = () => {
  const location = useLocation();
const Test =["/","/signup"];
 
const hidedata =!Test.includes(location.pathname);

  return (
    <div>
    {hidedata && <Navbar/>}
    {/* {hidedata && <Home/>} */}
     <Routes> 

        <Route path="/About" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/BookShelf" element={<BookShelf />} />
        <Route path="/Contact" element={<Page />} />
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup/>}></Route>
      </Routes>
      {hidedata && <Footer/> }

      </div>
  );
}; 

export default App;
