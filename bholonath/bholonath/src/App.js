import Navbar from './Components/Navbar';
import './App.css';
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import Albums from './Pages/Albums';
import Posts from './Pages/Posts';
import Products from './Pages/Products';
import React from 'react';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="Albums" element={<Albums/>}/>
        <Route path="Posts" element={<Posts/>}/>
        <Route path="Products" element={<Products/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
