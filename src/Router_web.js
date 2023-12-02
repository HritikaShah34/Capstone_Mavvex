import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Thankyou from './Components/Thankyou';
import App from './App';

export default function Router_web() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" Component={App}/>
            <Route path="/another" Component={Thankyou}/>
        </Routes>
    </BrowserRouter>
  )
}
