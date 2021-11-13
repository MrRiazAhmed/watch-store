import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AddProduct from './Component/AddProduct/AddProduct';
import AllProducts from './Component/AllProducts/AllProducts';
import Dashboard from './Component/DashBoard/Dashboard';
import Details from './Component/Details/Details';
import Footer from './Component/Footer/Footer';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import MakeAdmin from './Component/MakeAdmin/MakeAdmin';
import ManageOrders from './Component/ManageOrders/ManageOrders';
import ManageProducts from './Component/ManageProducts/ManageProducts';
import Menubar from './Component/Menubar/Menubar';
import MyOrders from './Component/MyOrders/MyOrders';
import NotFound from './Component/NotFound/NotFound';
import Payment from './Component/Payment/Payment';

import Register from './Component/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {

  return ( 
    <div className="App">
    <AuthProvider>
      <BrowserRouter>
        <Menubar></Menubar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/products">
            <AllProducts></AllProducts>
          </Route>
          <Route path="/addproducts">
            <AddProduct></AddProduct>
          </Route>
          <PrivateRoute path="/details/:id">
            <Details></Details>
          </PrivateRoute>
          <PrivateRoute path="/myorders">
           <MyOrders></MyOrders>
          </PrivateRoute>
          <Route path="/manageorders">
            <ManageOrders></ManageOrders>
          </Route>
          <Route path="/manageproducts">
            <ManageProducts></ManageProducts>
          </Route>
          <Route path="/makeadmin">
           <MakeAdmin></MakeAdmin>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/payment">
            <Payment></Payment>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <Route path="/*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
    </div>
  );
}

export default App;
