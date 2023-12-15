import React, { useEffect, useMemo, useState } from "react";
import "./styles/App.css";
import {BrowserRouter, Route,  Navigate, Routes} from "react-router-dom"
import About from "./components/UI/pages/About";
import Posts from "./components/UI/pages/Posts";
import Error from "./components/UI/pages/Error";
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter";
function App() {
  
  return (
    <BrowserRouter>
      <Navbar/>
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
