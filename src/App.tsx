import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Services from './Component/Services';
import Tools from './Component/Tools';
import About from './Component/About';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import NewsList from './Component/NewsList';
import Weather from './Component/Weather';

function App() {
  return (
  
    <>
    <div className='App'>
      
    </div>
    
        <BrowserRouter>
        <Navbar />

            <Routes>
                <Route path="/"  element={<Home />} />
                <Route path="/tools" element={<Tools />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About />} />
                <Route path="/news" element={<NewsList />} />
                <Route path="/weather" element={<Weather />} />
            </Routes>
            
        </BrowserRouter>
        <Footer/>
    </>
  );
}

export default App;
