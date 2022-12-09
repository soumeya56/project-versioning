import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from './user/Signup';
import Signin from './user/Signin';
import Home from './core/Home';
import PrivateRoute from './auth/PrivateRoute';
import Dashboard from './user/UserDashboard';
import AdminRoute from './auth/AdminRoute';
import AdminDashboard from './user/AdminDashboard';
import AddCategory from './admin/AddCategory';
import AddProduct from './admin/AddProduct';
import AddAdmin from './admin/AddAdmin';
import ManageProducts from './admin/ManageProducts';
import UpdateProduct from './admin/UpdateProduct';
import Shop from './core/Shop';
import Product from './core/Product';
import Cart from './core/Cart';
import Orders from './admin/Orders';
import Profile from './user/Profile';
import ManageCategories from './admin/ManegeCategory';
import Menu from './core/Menu';
import NotFound from './core/NotFound';
import UpdateCategory from './admin/UpdateCategory';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} exact />
        
        <Route path='/signin' component={Signin} exact />
        <Route path='/signup' component={Signup} exact />
        <PrivateRoute path='/user/dashboard' component={Dashboard} exact />
        <AdminRoute path='/admin/dashboard' component={AdminDashboard} exact />
        <AdminRoute path='/create/category' component={AddCategory} exact />
        <AdminRoute path='/create/product' component={AddProduct} exact />
        <AdminRoute path='/create/admin' component={AddAdmin} exact />
        <AdminRoute path='/admin/products' component={ManageProducts} exact />
        <AdminRoute path='/admin/categories' component={ManageCategories} exact />
        <AdminRoute 
           path='/admin/category/:categoryId' 
           component={UpdateCategory} 
           exact 
        />
        <Route path='/cart' component={Cart} exact />
        <AdminRoute path='/admin/orders' component={Orders} exact />
        <PrivateRoute path='/profile/:userId' component={Profile} exact />
        <AdminRoute
          path='/admin/product/update/:productId'
          component={UpdateProduct}
          exact
        />
        <Route path='/product/:productId' component={Product} exact />
        <Route path='/shop' component={Shop} exact />
       
        
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
