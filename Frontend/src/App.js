import React from 'react';
import './App.css';
import Home from './pages/Home';
import { Routes,Route,Outlet,NavLink } from 'react-router-dom';
import ExpenseTracker from './pages/ExpenseTracker';
import Rent from './pages/Rent';
function App() {
  return (

<Routes>
{/* <Route path="/" element={<div><Outlet></Outlet></div>}> */}
{/* <Route index element={<Home/>}></Route> */}
  <Route path='/' element={<Home></Home>}></Route>
  <Route path='/home/ExpenseTracker' element={<ExpenseTracker/>} />
  <Route path='/home/Rent' element={<Rent/>} />

</Routes>
)
}

export default App;