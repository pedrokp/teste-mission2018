import { createStore, combineReducers } from 'redux'
import cartReducer from '../features/cart/reducer'
import storeSynchronize from 'redux-localstore'


const rootReducer = combineReducers({
  cart: cartReducer,
})

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

storeSynchronize(store)
export default store
