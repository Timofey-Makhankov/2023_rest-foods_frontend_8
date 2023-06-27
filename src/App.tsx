import { Route, Routes } from "react-router-dom"
import Home from "./components/pages/Home"
import NotFound from './components/pages/NotFound';
import MenuList from './components/pages/MenuList';
import TableList from './components/pages/TableList';
import { DETAILED_MENU_PAGE, HOME_PAGE, LOGIN_PAGE, MENU_LIST_PAGE, TABLE_LIST_PAGE } from './Constants';
import Login from './components/pages/Login';
import DetailedMenu from './components/pages/DetailedMenu';

/**
 * The Starting Point of all Routes in the Aplication
 * @returns The App Component with all the Routes defined
 * @author Timofey Makhankov
 * @copyright 2023
 */
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
      <Route path={LOGIN_PAGE} element={
        <Login/>
      }/>
      <Route path={DETAILED_MENU_PAGE} element={
        <DetailedMenu/>
      }
      />
      <Route path='*' element={
        <NotFound/>
      }/>
    </Routes>
  )
}

export default App
