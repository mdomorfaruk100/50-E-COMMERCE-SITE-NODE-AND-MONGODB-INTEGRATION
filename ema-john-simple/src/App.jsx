import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { createContext, useState } from 'react';
import Shipment from './components/Shipment/Shipment';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route exact path='/' Component={Shop} />
          <Route path='/shop' Component={Shop} />
          <Route path='/review' Component={Review} />
          <Route path='/inventory' element={<PrivateRoute><Inventory /></PrivateRoute>} />
          <Route path='/shipment' element={<PrivateRoute><Shipment /></PrivateRoute>} />
          <Route path='/product/:key' Component={ProductDetail} />
          <Route path='/login' Component={Login} />
          <Route path='*' Component={NotFound} />
          <Route path='*' Component={NotFound} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App
