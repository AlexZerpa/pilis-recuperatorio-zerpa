import React from 'react';
import './assets/css/App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Nuevo from './components/Nuevo';
import Editar from './components/Editar';

function App() {
  return (
   /*  <div className="container"> 
      <Login/>
    </div> */

    <React.Fragment>
        <Router>
            <Routes>
                
                <Route path='/' element={<Login/>}/>
                <Route path='/Dashboard' element={<Dashboard/>}/>
                <Route path='/Nuevo' element={<Nuevo/>}/>
                <Route path='/Editar' element={<Editar/>}/>
                
            </Routes>
            

        </Router>

    </React.Fragment>


  )
}

export default App;
