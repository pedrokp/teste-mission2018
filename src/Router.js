import React from 'react'
import { Switch, Route } from 'react-router-dom'

import ListPage from './pages/listpage'
import CartPage from './pages/cartpage'
import AddProduct from './pages/addproduct'

//<Route path='*' component={HomePage} />

const Router = () => (
  <Switch>
    <Route exact path='/list' component={ListPage} />
    <Route exact path='/cart' component={CartPage} />
    <Route exact path='/add' component={AddProduct} />

  </Switch>
)

export default Router
