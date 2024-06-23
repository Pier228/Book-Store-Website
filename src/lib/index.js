import { combineReducers } from 'redux';
import orderPopupReducer from './reducers/orderPopupReducer';
import cartSlice from './reducers/cartSlice';

const rootReducer = combineReducers({
    orderPopup: orderPopupReducer,
    cart: cartSlice
});

export default rootReducer;