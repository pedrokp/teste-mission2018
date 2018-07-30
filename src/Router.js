import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from './pages/homepage'
import CartPage from './pages/cartpage'
import AddProduct from './pages/addproduct'

//<Route path='*' component={HomePage} />

const Router = () => (
  <Switch>
    <Route exact path='/' component={HomePage} />
    <Route exact path='/cart' component={CartPage} />
    <Route exact path='/add' component={AddProduct} />

    
  </Switch>
)

export default Router