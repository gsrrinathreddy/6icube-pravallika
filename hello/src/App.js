
import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import React from 'react';
import Posts from './Components/Pages/Posts';
import Albums from './Components/Pages/Albums';
import Products from './Components/Pages/Products';

function App() {
  const Navpages = ['Albums','Products','Posts'];
  return (
    <div className="App">   
      <BrowserRouter>
     <Navbar pages ={Navpages} bgColor ="red" buttonColor="green"/>
      <Routes>
        <Route path='/Posts' element={<Posts/>}/>
        <Route path='/Albums'element={<Albums/>}/>
        <Route path='/Products'element={<Products/>}/>
       
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
