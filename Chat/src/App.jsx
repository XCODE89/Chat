import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Chat from './pages/Chat';
import SetAvatar from './pages/SetAvatar';
import ContextProvider from './utils/context';


function App() {

  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/setavatar' element={<SetAvatar/>}/>
          <Route path='/' element={<Chat/>}/>
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  )
}

export default App
