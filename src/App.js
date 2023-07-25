import './App.css';
import Navbar1 from './pages/Navbar';
import Footer from './pages/Footer';
import Content from './pages/Content';
import { BrowserRouter, Route, Routes } from "react-router-dom"





import Task4 from './pages/Task4';


import { useRef, useState } from 'react';
import Home from './pages/Home/Weather';
import Weather from './pages/Home/Weather';



function App() {
  const [shownav,setNav]=useState(true)
  const ref =useRef()
  return (
    <div className="App">
      <BrowserRouter>
        {shownav ? <Navbar1></Navbar1> : ""}

        <Routes>
          <Route path="/" element={<Content />}></Route>

          <Route path="/weather" element={<Weather />}></Route>
          <Route path="/Task4" element={<Task4 />}></Route>
        </Routes>
      </BrowserRouter>
      {shownav ? <Footer></Footer> : ""}
    </div>
  );
}

export default App;
