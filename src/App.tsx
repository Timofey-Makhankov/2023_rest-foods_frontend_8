import React from 'react';
import { Route, Routes } from "react-router-dom"
import Home from "./components/pages/Home"
import NotFound from './components/pages/NotFound';
import MenuList from './components/pages/MenuList';
import TableList from './components/pages/TableList';
import { HOME_PAGE, LOGIN_PAGE, MENU_LIST_PAGE, TABLE_LIST_PAGE } from './Constants';
import Login from './components/pages/Login';

function App() {
  return (
    <Routes>
      <Route path={HOME_PAGE} element={
        <Home/>
      }/>
      <Route path={MENU_LIST_PAGE} element={
        <MenuList/>
      }/>
      <Route path={TABLE_LIST_PAGE} element={
        <TableList/>
      }/>
      <Route path='/login' element={
        <Login/>
      }/>
      <Route path='*' element={
        <NotFound/>
      }/>
    </Routes>
  )
}

export default App
