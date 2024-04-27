import React from 'react';
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Conoceme from './Components/Conoceme/Conoceme';
import Proyectos from './Components/Proyectos/Proyectos';
import Blog from './Components/Blog/Blog';

function App() {

  return (
    <div className='app'>
      <Navbar/>
      <div className="content-container">
        <Routes>
          <Route path='/' Component={Home} />
          <Route path= '/proyectos' Component={Proyectos}/> 
          <Route path= '/conoceme' Component={Conoceme}/> 
          <Route path= '/blog' Component={Blog}/> 
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App
