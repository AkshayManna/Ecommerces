import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FETCH_PRODUCT_FAILURE, FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS } from "../Constant/constant"


const notify = (msg) => toast(msg);
<ToastContainer/>
export const fetchProductRequest = ()=>{
    return {
        type:FETCH_PRODUCT_REQUEST
    }
}


export const fetchProductSuccess = (msg)=>{
    return {
        type:FETCH_PRODUCT_SUCCESS,
        payload: msg
    }
}

export const fetchProductFalure = (errorMsg)=>{
    return {
        type:FETCH_PRODUCT_FAILURE,
        payload: errorMsg
    }
}

export const fetchProductDetails =()=>{

   
    return dispatch =>{
        dispatch(fetchProductRequest())
        axios.get('https://fakestoreapi.com/products')
        .then(response => {
            const msg = response.data
            notify('Data fetch successfully');
            console.log(msg,'success_Action')
            dispatch(fetchProductSuccess(msg)) 
           
          })
          .catch(error =>{
            const errorMsg = error.message
            notify(errorMsg.message);
            console.log(error,'assssssss')
            dispatch(fetchProductFalure(errorMsg))
          })
    }
}