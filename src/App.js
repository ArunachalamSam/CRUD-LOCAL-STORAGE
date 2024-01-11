import React from 'react'
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Create from './Create';
import Read from './Read';
import Update from './Update';

function App() {
  return (
   <div>
        <BrowserRouter>

          <Routes>
            <Route path='/' element={<Read/>}></Route>
            <Route path='/create' element={<Create/>}></Route>
            <Route path='/update' element={<Update/>}></Route>
          </Routes>

        </BrowserRouter>
   </div>
  );
}

export default App;
