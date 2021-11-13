
import React from 'react';
import {
  Link, useRouteMatch, Switch,
  Route,
} from 'react-router-dom';
import AdminRoute from '../../AdminRoute/AdminRoute';
import useAuth from '../../hooks/useAuth';
import AddProduct from '../AddProduct/AddProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageOrders from '../ManageOrders/ManageOrders';
import ManageProducts from '../ManageProducts/ManageProducts';
import MyOrders from '../MyOrders/MyOrders';
import Payment from '../Payment/Payment';
import "./Dashboard.css"

const Dashboard = () => {
  const { user, admin } = useAuth();
  const { path, url } = useRouteMatch()
  return (
    <div className="Dashboard">
      <div className="row ">
        <div className="col-md-3 bar">
          <h1>DashBoard</h1>
          <hr />
          <ul className="dashboard-list">
            <li>
              <Link to={`${url}`}>Home</Link>
            </li>
            <li>
              <Link to={`${url}/Payment`}>Payment</Link>
            </li>
            <li>
              <Link to={`${url}/Myorders`}>My Orders</Link>
            </li>
            {
              admin&&<span>
              <li>
                <Link to={`${url}/ManageOrder`}>ManageOrder</Link>
              </li>
              <li>
                <Link to={`${url}/AddProducts`}>Add Product</Link>
              </li>
              <li>
                <Link to={`${url}/ManageProduct`}>Manage Product</Link>
              </li>
              <li>
                <Link to={`${url}/MakeAdmin`}>Make Admin</Link>
              </li>
              </span>
            }

          </ul>
        </div>
        <div className="col-md-9">
          <Switch>
            <Route exact path={path}>
              <h3>Welcome to Dashboard</h3>
            </Route>
            <Route exact path={`${url}/Payment`}>
              <Payment></Payment>
            </Route>
            <Route exact path={`${url}/Myorders`}>
              <MyOrders></MyOrders>
            </Route>
            <AdminRoute exact path={`${url}/ManageOrder`}>
              <ManageOrders></ManageOrders>
            </AdminRoute>
            <AdminRoute exact path={`${url}/AddProducts`}>
              <AddProduct></AddProduct>
            </AdminRoute>
            <AdminRoute exact path={`${url}/ManageProduct`}>
              <ManageProducts></ManageProducts>
            </AdminRoute>
            <AdminRoute exact path={`${url}/MakeAdmin`}>
              <MakeAdmin></MakeAdmin>
            </AdminRoute>
          </Switch>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;