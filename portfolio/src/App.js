import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import AboutMe from './Components/Pages/AboutMe';
import Qualification from './Components/Pages/Qualification';
import Experience from './Components/Pages/Experience';
import Skills from './Components/Pages/Skills';
import Hobbies from './Components/Pages/Hobbies';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="AboutMe"element={<AboutMe/>}/>
        <Route path="Qualification"element={<Qualification/>}/>
        <Route path="Experience"element={<Experience/>}/>
        <Route path="Skills"element={<Skills/>}/>
        <Route path="Hobbies"element={<Hobbies/>}/>
      </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
