import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { POST_REGISTRATION_FAILURE, POST_REGISTRATION_REQUEST, POST_REGISTRATION_SUCCESS } from "../Constant/constant"


const notify = (msg) => toast(msg);
<ToastContainer/>
export const postUsersRequest = ()=>{
    return {
        type:POST_REGISTRATION_REQUEST
    }
}


export const postUsersSuccess = (msg)=>{
    return {
        type:POST_REGISTRATION_SUCCESS,
        payload: msg
    }
}

export const postUsersFalure = (errorMsg)=>{
    return {
        type:POST_REGISTRATION_FAILURE,
        payload: errorMsg
    }
}

export const postRegistration =(Data)=>{
   
    return dispatch =>{
        dispatch(postUsersRequest())
        axios.post('http://localhost/8Laravel/public/api/registration',Data)
        .then(response => {
            const msg = response.data
            notify(msg.data);
            console.log(msg.data,'success_Action')
            dispatch(postUsersSuccess(msg)) 
           
          })
          .catch(error =>{
            const errorMsg = error.message
            notify(errorMsg.message);
            console.log(error,'assssssss')
            dispatch(postUsersFalure(errorMsg))
          })
    }
}