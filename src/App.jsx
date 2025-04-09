// import vitelogo from "./public/vite.svg"
import { useState } from 'react';
import './App.css'
import GridView from './GridView'
import ProfileCard from './ProfileCard';
import Todo from './Todo';
import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Store from "./Store";


const ProfileList = {
  name: "AjithKumar",
  Department: "AIDS",
  Year: 2,
  mobile: 6377734265,
  address: "d.no: 115/23 angeripalayam,tirupur",
};

function App() {
  const [Count,SetCount] = useState(0)
  return (
    <>
      <h1> Welcome</h1>
      <BrowserRouter>
      <Navbar />
      <Routes>
      {/* <Route path="/todo" element={<Todo />} /> */}
      
        <Route path="/profilecard" element={<ProfileCard profile={ProfileList} />} />
        <Route path="/gridview" element={<GridView />} />
        <Route path="/redux" element={
        <provider store={Store}><Todo/></provider>}/><Route/>
      </Routes>
    </BrowserRouter>
       </>
  )
}

export default App;
