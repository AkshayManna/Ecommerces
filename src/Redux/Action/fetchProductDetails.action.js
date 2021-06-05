import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FETCH_PRODUCTDETAILS_FAILURE, FETCH_PRODUCTDETAILS_REQUEST, FETCH_PRODUCTDETAILS_SUCCESS } from "../Constant/constant"


const notify = (msg) => toast(msg);
<ToastContainer/>
export const fetchProductListRequest = ()=>{
    return {
        type:FETCH_PRODUCTDETAILS_REQUEST
    }
}


export const fetchProductListSuccess = (msg)=>{
    return {
        type:FETCH_PRODUCTDETAILS_SUCCESS,
        payload: msg
    }
}

export const fetchProductListFalure = (errorMsg)=>{
    return {
        type:FETCH_PRODUCTDETAILS_FAILURE,
        payload: errorMsg
    }
}

export const fetchProductDetailsList =(id)=>{

   
    return dispatch =>{
        dispatch(fetchProductListRequest(id))
        console.log(id,'idid')
        
        axios.get('https://fakestoreapi.com/products/'+id)
        .then(response => {
            const msg = response.data
            notify('Data fetch successfully');
            console.log(msg,'success_Action')
            dispatch(fetchProductListSuccess(msg)) 
           
          })
          .catch(error =>{
            const errorMsg = error.message
            notify(errorMsg.message);
            console.log(error,'assssssss')
            dispatch(fetchProductListFalure(errorMsg))
          })
    }
}