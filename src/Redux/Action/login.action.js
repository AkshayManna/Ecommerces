import {POST_LOGIN_REQUEST,POST_LOGIN_SUCCESS,POST_LOGIN_FAILURE} from '../Constant'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = (msg) => toast(msg);
<ToastContainer/>
export const postLoginRequest = ()=>{
    return {
        type:POST_LOGIN_REQUEST
    }
}

export const postLoginSuccess =(data)=>{
    return {
        type:POST_LOGIN_SUCCESS,
        payload:data
    }
}

export const postLoginFalure =(errorMsg)=>{
    return {
        type:POST_LOGIN_FAILURE,
        payload:errorMsg
    }
}

export const login =(data)=>{
    return dispatch =>{
        dispatch(postLoginRequest())
        axios.post('http://localhost/8Laravel/public/api/login',data)
        .then(response=>{
            const msg = response.data;
            dispatch(postLoginSuccess(msg)) 
        })
        .catch(errMsg=>{
            const errorMsg = errMsg.message

            dispatch(postLoginFalure(errorMsg))
        })
    }

}