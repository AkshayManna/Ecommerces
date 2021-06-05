import {combineReducers } from 'redux'
import {userReducer} from './user.Reducer'
import {registrationReducer} from './registration.Reducer'
import {personalReducer} from './personalDetails.Reducer'
import {fetchProductReducer} from './fetchProduct.Reducer'
import {fetchProductDetailsReducer} from './fetchProductDetails.Reducer'
import {loginReducer} from './login.Reducer'

const rootReducer = combineReducers({
    user:userReducer,
    postUser:registrationReducer,
    postPersonalData:personalReducer,
    productList:fetchProductReducer,
    productDetails:fetchProductDetailsReducer,
    loginData:loginReducer

});
export default rootReducer;