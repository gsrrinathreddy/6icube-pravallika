
import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import React from 'react';
import AutoComplete from './Components/Pages/AutoComplete';
import Button from './Components/Pages/Button';
import ButtonGroup from './Components/Pages/ButtonGroup';
import CheckBox from './Components/Pages/CheckBox';
import Products from './Components/Products';




function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/AutoComplete' element={<AutoComplete/>}/>
        <Route path='/Button'element={<Button/>}/>
        <Route path='/ButtonGroup'element={<ButtonGroup/>}/>
        <Route path='/CheckBox'element={<CheckBox/>}/>
        <Route path='/Products' elements={<Products/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
