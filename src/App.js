import React from 'react';
import './App.css';
import Home from './Components/Home';
import Footer from './Components/Footer'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from './Components/Navbar';
import Pc from './Components/Pc';
import Console from './Components/Console';
import Mobile from './Components/Mobile';
import Store from './Components/Store';
import Life_style from './Components/Life_style';
import Error from './Components/Error';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Store' element={<Store/>}/>
        <Route path='/Pc' element={<Pc/>} />
        <Route path='/Console' element={<Console/>} />
        <Route path='/Mobile' element={<Mobile/>} />
        <Route path='/Lifestyle' element={<Life_style/>}/>
        <Route path='/*' element={<Error/>}/>

      </Routes> 
      </BrowserRouter>
    
   </div>
  );
}

export default App;
