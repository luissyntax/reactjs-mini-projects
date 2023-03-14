import React, {useState} from 'react';
import {Route, Routes, Link, BrowserRouter} from 'react-router-dom';

import QrCode from './pages/QrCode';

import './App.css';

const App = () => {

  const [inputQc, setInputQc] = useState('');

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/qrcode' element={<QrCode value={inputQc} click={setInputQc}/>}/>
        <Route path='/' element={
          <div className='body'>
            <h1>QR CODE</h1>
            <p>Digite no campo abaixo o que você quer transformar em QR CODE</p>
            <input 
            type='text' 
            placeholder='O que você quer transformar em QR CODE?'
            onChange={e=>setInputQc(e.target.value)}
            />
            <Link to="/qrcode">
            <button type="submit" disabled={!inputQc}>Transforme!</button>
            </Link>
          </div>
        }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
